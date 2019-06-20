<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
use app\models\Drivers;
use yii\grid\GridView;

/**
 * @var yii\web\View $this
 * @var app\models\gbUser $model
 * @var yii\widgets\ActiveForm $form
 */
?>
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
<div id="success"> </div> <!-- For success message -->

<div class="gb-user-form">

    <?php $form = ActiveForm::begin(['options' => ['class' => 'driverorder-form']]); ?>
    <h3>Мой заказ</h3>

    <?= $form->field($model, 'flight_number')->textInput(['maxlength' => 100], ['class' => 'input-modal']) ?>

    <div class="form-group">
        <?= '<label class="control-label">Дата</label>'; ?>
        <?
        echo DateTimePicker::widget([
            'name' => 'date',
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

    <?= $form->field($model, 'departure_point')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'arrival_point')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'quantity')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'price')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($client, 'name')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($client, 'company')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($client, 'phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($client, 'add_phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>


    <?php ActiveForm::end(); ?>

</div>