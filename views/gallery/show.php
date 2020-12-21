<div>
	<?php echo $title; ?>
</div>
<div>
	<?php foreach ($images as $image) : ?>
		<div>
			<img src=" <?= $image->getUrl(); ?>" alt="<?php $image->getAlt(); ?>">
		</div>
	<?php endforeach; ?>
</div>
