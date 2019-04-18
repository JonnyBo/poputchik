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

    <?php $form = ActiveForm::begin(['options' => ['class' => 'newclient-form']]); ?>
    <h3>Новый Клиент</h3>



    <?= $form->field($model, 'name')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'company')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

    <?= $form->field($model, 'add_phone')->textInput(['maxlength' => 255], ['class' => 'input-modal']) ?>

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