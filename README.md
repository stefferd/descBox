descBox
=======

jQuery plugin is created to show a large preview of an image like lightbox, but with html description

Only one in the collection now slideshow is shown
<code>&lt;a data-preview="one"&gt;<br />
&nbsp;&nbsp;&lt;img src="img/1.jpg" class="desc-image" alt="1" /&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-title"&gt;Lorem ipsum&lt;/div&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-description"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.&lt;/p&gt;<br />
&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/a&gt;<br />
</code>
Create a collection by using the same data-preview name like the example below
<code>&lt;a data-preview="collection"&gt;<br />
&nbsp;&nbsp;&lt;img src="img/1.jpg" class="desc-image" alt="1" /&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-title"&gt;Lorem ipsum&lt;/div&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-description"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.&lt;/p&gt;<br />
&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/a&gt;<br />
&lt;a data-preview="collection"&gt;<br />
&nbsp;&nbsp;&lt;img src="img/2.jpg" class="desc-image" alt="2" /&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-title"&gt;Lorem ipsum 2&lt;/div&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-description"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.&lt;/p&gt;<br />
&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/a&gt;<br />
&lt;a data-preview="collection"&gt;<br />
&nbsp;&nbsp;&lt;img src="img/3.jpg" class="desc-image" alt="3" /&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-title"&gt;Lorem ipsum 3&lt;/div&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-description"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.&lt;/p&gt;<br />
&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/a&gt;<br />
&lt;a data-preview="collection"&gt;<br />
&nbsp;&nbsp;&lt;img src="img/4.jpg" class="desc-image" alt="4" /&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-title"&gt;Lorem ipsum 4&lt;/div&gt;<br />
&nbsp;&nbsp;&lt;div class="desc-description"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies vulputate massa eu posuere. Proin at fermentum tortor. Suspendisse eu ante pellentesque sapien fringilla scelerisque. Nulla accumsan tortor ut odio faucibus, non blandit nunc aliquet. Vestibulum hendrerit ac nisl sed congue. Sed cursus diam non consectetur pulvinar. Proin sed sollicitudin felis.&lt;/p&gt;<br />
&nbsp;&nbsp;&lt;/div&gt;<br />
&lt;/a&gt;<br />
</code>

Init the plugin:

<code>$(document).ready(function() {<br />
&nbsp;&nbsp;$('*[data-preview]').descBox({ slideShowRepeat: true });<br />
});
</code>
