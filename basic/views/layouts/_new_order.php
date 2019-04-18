<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>
<?php $form = ActiveForm::begin() ?>
<?= $form->field($model, 'name')->textInput(['autofocus' => true]) ?>

<?= $form->field($model, 'email') ?>

<?= $form->field($model, 'subject') ?>

<?= $form->field($model, 'body')->textarea(['rows' => 6]) ?>

<?= $form->field($model, 'verifyCode')->widget(Captcha::className(), [
    'template' => '<div class="row"><div class="col-lg-3">{image}</div><div class="col-lg-6">{input}</div></div>',
]) ?>
 <?= Html::submitButton('Send', ['class' => 'btn btn-success']) ?>
<?php ActiveForm::end() ?>
