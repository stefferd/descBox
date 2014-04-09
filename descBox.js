/**
 * Created by Stef van den Berg
 * on 09/04/14
 *
 * This plugin is created to show a large preview of an image with html description
 *
 * Settings:
 *
 *  labelNext:  label that is set for the next tag
 *  labelPrevious:  label that is set for the previous tag
 *  labelClose:  label that is set for the close tag
 *  labelNext:  label that is set for the next tag
 *  labelSlideStart:  label that is set for the start slide show tag
 *  labelSlideStop:  label that is set for the stop slide show tag
 *  slideShowRepeat:  Repeat the slide show when true, Stop at last slide when false
 *  slideShowTime:  Pause between the slides in ms
 *  totalAnimationTime: Duration off the show animation in ms
 */

(function ( $ ) {

    $.fn.descBox = function(options) {

        return this.each(function() {
            var _settings = $.extend({
                collection: false,
                labelNext: 'Next',
                labelPrevious: 'Previous',
                labelClose: 'Close',
                labelSlideStart: 'Start slideshow',
                labelSlideStop: 'Stop slideshow',
                slideShowStarted: false,
                slideShowElement: null,
                slideShowCollectionName: '',
                slideShowInterval: null,
                slideShowRepeat: true,
                slideShowTime: 3500,
                totalAnimationTime: 500
            }, options || {});

            var $self = $(this);

            var collectionName = $self.attr('data-preview');
            var $collection = $('[data-preview=' + collectionName + ']');
            var isCollection = ($collection.length > 1);

            $self.on('click', function() {
                var $self = $(this);
                var description = $self.find('.desc-description').html();
                var title = $self.find('.desc-title').html();
                var $image = $self.find('.desc-image');

                createMask();
                createImage($image.attr('src'), title, description, isCollection, collectionName, $self);
            });

            function createMask() {
                var $document = $('body');
                if ($document.find('.desc-mask').length == 0) {
                    $document.append('<div class="desc-mask"><div class="desc-close">' + _settings.labelClose + '</div></div>');

                    var $maskClose = $('.desc-close');
                    $maskClose.on('click', function() {
                        var $self = $(this);
                        var $mask = $self.parent('.desc-mask');
                        var $preview = $('.desc-preview');
                        var $previewDesc = $('.desc-preview-description');
                        var $previewBackground = $('.desc-preview-background');
                        $previewBackground.remove();
                        $preview.remove();
                        $mask.remove();
                        $previewDesc.remove();
                        if (_settings.slideShowInterval != null) {
                            window.clearInterval(_settings.slideShowInterval);
                        }
                    });
                }
            }

            function createImage(imageSrc, title, description, isCollection, collectionName, $current) {
                var $document = $('body');
                if ($document.find('.desc-preview').length == 0) {
                    $document.append('<div class="desc-preview"></div>');
                    $document.append('<div class="desc-preview-background"></div>')
                    var $preview = $('.desc-preview');
                    $preview.append('<img src="' + imageSrc + '" alt="' + title + '" class="desc-img-responsive" />');
                    var $image = $('.desc-img-responsive');
                    $image.css({ opacity: 0 });
                    var screenWidth = $document.width();
                    var screenHeight = $document.height();
                    var imageWidth = Math.ceil(($image.width() / screenWidth) * 100) + 5;
                    var imageHeight = Math.ceil(($image.height() / screenHeight) * 100) + 10;
                    var $previewBackground = $('.desc-preview-background');
                    $previewBackground.animate({ width: imageWidth + '%', height: imageHeight + '%', left: '10%'}, ((_settings.totalAnimationTime / 100) * 50), function() {
                        $document.append('<div class="desc-preview-description"></div>');
                        var $previewDesc = $('.desc-preview-description');
                        $previewDesc.css({ opacity: 0 });
                        $previewDesc.html('<h2>' + title + '</h2>' + description);
                        if (isCollection) {
                            previousInCollection(collectionName, $current);
                            nextInCollection(collectionName, $current);
                            var labelSlideshow = (_settings.slideShowStarted) ? _settings.labelSlideStop : _settings.labelSlideStart;
                            $previewDesc.append('<div class="desc-preview-slide">' + labelSlideshow + '</div>');
                            var $slideshow = $('.desc-preview-slide');
                            if (_settings.slideShowStarted) {
                                $slideshow.off('click');
                                $slideshow.on('click', function() {
                                    stopSlideshow();
                                });
                            } else {
                                var $slideshow = $('.desc-preview-slide');
                                $slideshow.off('click');
                                $slideshow.on('click', function() {
                                    startSlideshow(collectionName, $current);
                                });
                            }
                        }
                        $previewDesc.animate({ opacity: 1 }, ((_settings.totalAnimationTime / 100) *25), function() {
                            $image.animate({ opacity: 1}, ((_settings.totalAnimationTime / 100) * 25));
                        });
                    });
                }
            }

            function nextInCollection(collectionName, $current) {
                var $nextElement = $current.next('[data-preview=' + collectionName + ']');
                if ($nextElement.length != 0) {
                    var $previewDesc = $('.desc-preview-description');
                    $previewDesc.append('<div class="desc-arrow-next">' + _settings.labelNext + '</div>');
                    var $nextDesc = $('.desc-arrow-next');
                    $nextDesc.on('click', function() {
                        var $mask = $('.desc-mask');
                        var $preview = $('.desc-preview');
                        var $previewDesc = $('.desc-preview-description');
                        var $previewBackground = $('.desc-preview-background');
                        $previewBackground.remove();
                        $preview.remove();
                        $mask.remove();
                        $previewDesc.remove();
                        if (_settings.slideShowInterval != null) {
                            stopSlideshow();
                        }
                        createMask();
                        createImage($nextElement.find('.desc-image').attr('src'), $nextElement.find('.desc-title').html(), $nextElement.find('.desc-description').html(), true, collectionName, $nextElement);
                    });
                }
            }

            function previousInCollection(collectionName, $current) {
                var $previousElement = $current.prev('[data-preview=' + collectionName + ']');
                if ($previousElement.length != 0) {
                    var $previewDesc = $('.desc-preview-description');
                    $previewDesc.append('<div class="desc-arrow-previous">' + _settings.labelPrevious + '</div>');
                    var $previousDesc = $('.desc-arrow-previous');
                    $previousDesc.on('click', function() {
                        var $mask = $('.desc-mask');
                        var $preview = $('.desc-preview');
                        var $previewDesc = $('.desc-preview-description');
                        var $previewBackground = $('.desc-preview-background');
                        $previewBackground.remove();
                        $preview.remove();
                        $mask.remove();
                        $previewDesc.remove();
                        if (_settings.slideShowInterval != null) {
                            stopSlideshow();
                        }
                        createMask();
                        createImage($previousElement.find('.desc-image').attr('src'), $previousElement.find('.desc-title').html(), $previousElement.find('.desc-description').html(), isCollection, collectionName, $previousElement);
                    });
                }
            }

            function startSlideshow(collectionName, $current) {
                var $slideShowLabel = $('.desc-preview-slide');
                $slideShowLabel.off('click');
                $slideShowLabel.on('click', function() {
                    stopSlideshow();
                });
                $slideShowLabel.text(_settings.labelSlideStop);
                _settings.slideShowStarted = true;
                _settings.slideShowElement = $current.get(0);
                _settings.slideShowCollectionName = collectionName;
                _settings.slideShowInterval = setInterval(function() {
                    var $element = null;
                    var $nextElement = $(_settings.slideShowElement).next('[data-preview=' + _settings.slideShowCollectionName + ']');
                    if ($nextElement.length != 0) {
                        $element = $nextElement;
                    } else {
                        if (_settings.slideShowRepeat) {
                            var $firstElement = $('[data-preview=' + _settings.slideShowCollectionName + ']').eq(0);
                            _settings.slideShowElement = $firstElement;
                            $element = $firstElement;
                        } else {
                            stopSlideshow();
                            var $labelSlideshow = $('.desc-preview-slide');
                            $labelSlideshow.remove();
                        }
                    }
                    if ($element != null) {
                        _settings.slideShowElement = $element.get(0);
                        var $mask = $('.desc-mask');
                        var $preview = $('.desc-preview');
                        var $previewDesc = $('.desc-preview-description');
                        var $previewBackground = $('.desc-preview-background');
                        $previewBackground.remove();
                        $preview.remove();
                        $mask.remove();
                        $previewDesc.remove();
                        createMask();
                        createImage($element.find('.desc-image').attr('src'), $element.find('.desc-title').html(), $element.find('.desc-description').html(), true, _settings.slideShowCollectionName, $element);
                    }
                }, _settings.slideShowTime);
            }

            function stopSlideshow() {
                window.clearInterval(_settings.slideShowInterval);

                _settings.slideShowStarted = false;
                _settings.slideShowCollectionName = '';
                _settings.slideShowInterval = null;
                _settings.slideShowElement = null;

                var $mask = $('.desc-mask');
                var $preview = $('.desc-preview');
                var $previewDesc = $('.desc-preview-description');
                var $previewBackground = $('.desc-preview-background');
                $previewBackground.remove();
                $preview.remove();
                $mask.remove();
                $previewDesc.remove();
            }
        });
    };

    $.fn.descBox.defaultSettings = {

    };
}( jQuery ));
