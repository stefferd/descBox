descBox
=======

jQuery plugin is created to show a large preview of an image like lightbox, but with html description

Only one in the collection now slideshow is shown
<a data-preview="one">
    <img src="img/1.jpg" class="desc-image" alt="1" />
    <div class="desc-title">Lorem ipsum</div>
    <div class="desc-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.</p>
    </div>
</a>

Create a collection by using the same data-preview name like the example below
<a data-preview="collection">
    <img src="img/1.jpg" class="desc-image" alt="1" />
    <div class="desc-title">Lorem ipsum</div>
    <div class="desc-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.</p>
    </div>
</a>
<a data-preview="collection">
    <img src="img/2.jpg" class="desc-image" alt="2" />
    <div class="desc-title">Lorem ipsum 2</div>
    <div class="desc-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.</p>
    </div>
</a>
<a data-preview="collection">
    <img src="img/3.jpg" class="desc-image" alt="3" />
    <div class="desc-title">Lorem ipsum 3</div>
    <div class="desc-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.</p>
    </div>
</a>

Init the plugin:

$(document).ready(function() {
   $('*[data-preview]').descBox({ slideShowRepeat: true });
});
