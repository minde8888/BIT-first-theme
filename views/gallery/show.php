<div class="sm-3-4 pic " id="showGallery">
	<?php foreach ($images as $image): ?>
		<div class="imageBox xl-7-24">
			<img class="lightbox" src=" <?=$image->getUrl();?>" alt="<?php $image->getAlt();?>">
		</div>
	<?php endforeach;?>
</div>
