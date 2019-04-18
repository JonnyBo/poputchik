<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
use yii\widgets\ActiveForm;
use kartik\datetime\DateTimePicker;
use kartik\date\DatePicker;


//jQuery
//$this->registerJsFile('/jqGrid/js/jquery/1.7.2/jquery.min.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerJsFile('https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', ['position' => \yii\web\View::POS_HEAD]);

//jQuery UI
$this->registerJsFile('/jqGrid/js/jquery-ui/1.8.11/jquery-ui.min.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/js/jquery-ui/1.8.11/themes/redmond/jquery.ui.all.min.css');


$this->registerJsFile('/jqGrid/plugins/ui.multiselect.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/plugins/ui.multiselect.css');

//jqGrid
$this->registerCssFile('/jqGrid/css/ui.jqgrid.css');
$this->registerJsFile('/jqGrid/js/i18n/grid.locale-en.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerJsFile('/jqGrid/js/jquery.jqgrid.min.js', ['position' => \yii\web\View::POS_HEAD]);

//jqGrid Extension
$this->registerCssFile('/client/jqgrid-ext.css');
$this->registerJsFile('/client/jqgrid-ext.js', ['position' => \yii\web\View::POS_HEAD]);

//Other plugins
$this->registerJsFile('/jqGrid/js/jquery/form/2.67/jquery.form.min.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerJsFile('/jqGrid/js/jquery/form/2.67/jquery.form.min.js', ['position' => \yii\web\View::POS_HEAD]);

//range_picker
$this->registerJsFile('/jqGrid/range_picker/js/daterangepicker.jQuery.compressed.edit.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/range_picker/css/ui.daterangepicker.css');

//Code highlighter
$this->registerJsFile('/jqGrid/highlightjs/6.0/highlight.min.js', ['position' => \yii\web\View::POS_HEAD]);
$this->registerCssFile('/jqGrid/highlightjs/6.0/styles/vs.css');

// JS
//$this->registerJsFile('/js/analytics-phone/index.js', ['depends' => [\yii\web\JqueryAsset::className()]]);
//$this->registerCssFile('/css/analytics-phone/index.css');
/*
if (Yii::$app->user->can('driver')) {
    //echo '111111111111';
    header("Location: http://poputchik/departures-arrivals/table");
}
*/
?>


<link rel="icon" href="misc/favicon.png" type="image/png">

<script>

    $.extend($.jgrid.defaults,
        {
            hidegrid: false,
            hoverrows: false,

            ridview: true,
            viewrecords: true,
            scrollOffset: 21,

            width: 900,
            height: 290
        });

    //$.jgrid.defaults.height = '400px';
    $.jgrid.nav.refreshtext = 'Обновить';
    $.jgrid.formatter.date.newformat = 'ISO8601Short';

    $.jgrid.edit.closeAfterEdit = true;
    $.jgrid.edit.closeAfterAdd = true;




</script>

<h1>Прилеты/Вылеты</h1>

<div class="table-nav">
    <a class="btn btn-success new-order">Новый заказ клиента</a>
    <a class="btn btn-success new-app">Новая заявка водителя</a>
    <button type="button" class="btn btn-success edit-order"  disabled="disabled">Редактировать</button>
    <button type="button" class="btn btn-primary set-driver"  disabled="disabled">Привязать водителя</button>
    <button type="button" class="btn btn-secondary clear-driver"  disabled="disabled">Отвязать водителя</button>
    <button type="button" class="btn btn-primary connect"  disabled="disabled">Связать</button>
    <button type="button" class="btn btn-secondary disconnect" disabled="disabled">Отвязать</button>
    <a class="btn btn-success all-apps">Заявки водителей</a>
    <div class="filter">
        <div class="col-lg-6">
        <?php $form = ActiveForm::begin(['action' => '/departures-arrivals/index', 'method' => 'get']); ?>
            <div class="col-xs-10">
            <?= DatePicker::widget([
                'name' => 'from_date',
                'value' => $_GET['from_date'],
                'type' => DatePicker::TYPE_RANGE,
                'name2' => 'to_date',
                'value2' => $_GET['to_date'],
                'pluginOptions' => [
                    'autoclose' => true,
                    'format' => 'dd.mm.yyyy'
                ]
            ]); ?>
            </div>
            <div class="col-xs-2">
            <?= Html::submitButton('Выбрать', ['class' => 'btn btn-success']); ?>
            </div>
        <?php  ActiveForm::end(); ?>
        </div>
        <div class="clearfix"></div>
    </div>
</div>


    <div class="tables">
        <!-- Первое содержимое-->
        <div class="col-lg-6 win">
            <?= $rendered_grid_left ?>
        </div>
        <div class="col-lg-6 win">
            <!-- Второе содержимое-->
            <?= $rendered_grid_right ?>
        </div>
    </div>


<?php
$this->registerJsFile('js/deparr.js',    ['depends'=>'app\assets\AppAsset']);
?>






