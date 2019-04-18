<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;

//jQuery
$this->registerJsFile('/jqGrid/js/jquery/1.7.2/jquery.min.js', ['position' => \yii\web\View::POS_HEAD]);

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

<h1>Водители</h1>

<div class="table-nav">
    <a class="btn btn-success new-driver">Новый водитель</a>
    <button type="button" class="btn btn-success edit-driver"  disabled="disabled">Редактировать</button>
</div>

<div>
        <!-- Первое содержимое-->
        <div>
            <?= $rendered_grid ?>
        </div>
</div>


<?php
$this->registerJsFile('js/deparr.js',    ['depends'=>'app\assets\AppAsset']);
?>
