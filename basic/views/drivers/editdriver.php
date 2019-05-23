<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
//use app\models\Departures;
use app\models\Arrivals;
use app\models\Clients;
use yii\web\JsExpression;

/**
 * @var yii\web\View $this
 * @var app\models\gbUser $model
 * @var yii\widgets\ActiveForm $form
 */
?>
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div id="success"> </div> <!-- For success message -->

<div class="gb-user-form">

    <?php $form = ActiveForm::begin(['options' => ['class' => 'editdriver-form']]); ?>
    <h3>Редактировать Водителя</h3>

    <?= $form->field($model, 'id')->hiddenInput()->label(false); ?>

    <?= $form->field($model, 'login')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'password')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'auto_model')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'auto_number')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'auto_color')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'places')->textInput(['type' => 'number'], ['class' => 'input-modal']) ?>

    <div class="form-group">
    <?= '<label class="control-label">Дата</label>'; ?>
    <?
    echo DateTimePicker::widget([
        'name' => 'created',
        'type' => DateTimePicker::TYPE_COMPONENT_PREPEND,
        'value' => date('d.m.Y H:i'),
        'class' => 'input-modal',
        'pluginOptions' => [
            'autoclose'=>true,
            'format' => 'dd.mm.yyyy hh:ii'
        ],
    ]);
    ?>
    </div>

    <div class="form-group text-right">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success btn-update-password']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>