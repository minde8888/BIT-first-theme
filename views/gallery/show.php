<div class="sm-3-4 pic">
	<?php foreach ($images as $image): ?>
		<div class="imageBox">
			<img class="lightbox" src=" <?=$image->getUrl();?>" alt="<?php $image->getAlt();?>">
		</div>
	<?php endforeach;?>
</div>
