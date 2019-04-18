<?php

use yii\db\ActiveQuery;

class jqDepartures extends jqGrid
{
    protected function init()
    {
        #Set database table
        $this->table = 'arrivals';

        #Make all columns editable by default
        $this->cols_default = array('editable' => true);

        #Grid options in PHP init
        $this->options = array(
            'autowidth' => true,
            'shrinkToFit ' => true,
            //'multiselect' => true,
            //'multiboxonly' => true,

            #JS function in PHP are possible, but not recommended!
            'onSelectRow' => new jqGrid_Data_Raw("function(id){ 
                $('button.edit-order').removeAttr('disabled');
                $('button.edit-order').attr('onClick', 'openEditOrder('+id+')');
                if ($('#'+id).find('td:last-child').text() == '') {
                    $('button.set-driver').removeAttr('disabled');
                    $('button.clear-driver').attr('disabled', 'disable'); 
                    $('button.set-driver').attr('onClick', 'openSetDriver('+id+')');
                } else {
                    $('button.set-driver').attr('disabled', 'disable');
                    $('button.clear-driver').removeAttr('disabled');
                    $('button.clear-driver').attr('onClick', 'clearDriver('+id+')');
                }
                var selRow = $('#jqArrivals tr[aria-selected=\'true\']');
                if (selRow.length > 0) {
                    var selRowId = selRow.attr('id');
                    if ($('#'+id).hasClass('connected')) {
                        //активируем кнопку отвязать
                        $('button.disconnect').removeAttr('disabled');
                        $('button.connect').attr('disabled', 'disable');
                        $('button.disconnect').attr('onClick', 'daDisConnect(' + id + ', ' + selRowId + ');');
                    } else {
                        //активируем кнопку связать
                        $('button.connect').removeAttr('disabled');
                        $('button.disconnect').attr('disabled', 'disable');
                        $('button.connect').attr('onClick', 'daConnect(' + id + ', ' + selRowId + ');');
                    }
                } else {
                    $('button.connect').attr('disabled', 'disable');
                    $('button.connect').removeAttr('onClick');
                }
            }"
            ),
        );

        $this->where[] = "a.type = 'departures'";

        $this->query = "
            SELECT {fields}
            FROM $this->table a
                JOIN clients c ON (a.client_id=c.id)
            WHERE {where}
        ";


        #Set columns
        $this->cols = array(

            'id' => array(
                'label' => 'ID',
                //'width' => 15,
                'align' => 'center',
                'editable' => false, //id is non-editable
                'db' => 'a.id',
                'hidden' => true,
            ),

            'date' => array('label' => 'Дата',
                //'width' => 60,
                'editable' => true,
                'search_op' => 'date_range',
                'searchoptions' => array('dataInit' => $this->initDateRangePicker(array(
                        'earliestDate' => date('Y-m-d', strtotime("-6 month")),
                        'latestDate' => date('Y-m-d', strtotime("-6 month")),
                        'dateFormat' => 'yy-mm-dd',
                        'onChange' => new jqGrid_Data_Raw('dateRangePicker_onChange'),
                        'presetRanges' => array(
                            array('text' => date('M Y', strtotime("-2 month")), 'dateStart' => date('Y-m-01', strtotime("-2 month")), 'dateEnd' => date('Y-m-t', strtotime("-2 month"))),
                            array('text' => date('M Y', strtotime('previous month')), 'dateStart' => date('Y-m-01', strtotime('previous month')), 'dateEnd' => date('Y-m-t', strtotime('previous month'))),
                            array('text' => date('M Y'), 'dateStart' => date('Y-m-01'), 'dateEnd' => date('Y-m-d')),
                        ),
                        'datepickerOptions' => array(
                            'changeMonth' => true,
                            'changeYear' => true,
                            'dateFormat' => 'yy-mm-dd',
                            'minDate' => date('Y-m-d', strtotime("-30 years")),
                            'maxDate' => date('Y-m-d'),
                        ),
                    ))),
                'db' => 'a.date',
            ),

            'departure_point' => array('label' => 'Пункт отправления',
                //'width' => 60,
                'align' => 'center',
                'editable' => true,
                'db' => 'a.departure_point',
            ),

            'arrival_point' => array('label' => 'Пункт прибытия',
                //'width' => 60,
                'align' => 'center',
                'editable' => true,
                'db' => 'a.arrival_point',
            ),

            'flight_number' => array('label' => 'Номер рейса',
                //'width' => 60,
                'align' => 'center',
                'db' => 'a.flight_number',
            ),

            'quantity' => array('label' => 'Пассажиров',
                //'width' => 60,
                'align' => 'center',
                'db' => 'a.quantity',
            ),

            'price' => array('label' => 'Стоимость',
                //'width' => 60,
                'align' => 'center',
                'db' => 'a.price',
            ),

            'client' => array('label' => 'Клиент',
                //'width' => 60,
                'align' => 'center',
                'db' => "c.name",
            ),

            'driver' => array('label' => 'Водитель',
                //'width' => 60,
                'align' => 'center',
                'manual' => true,
                'encode' => false,
            ),

            'driver_id' => array('db' => 'a.driver_id',
                'unset' => true,
            ),

            'client_id' => array('db' => 'a.client_id',
                'unset' => true,
            ),

        );

        #Set nav
        $this->nav = array('add' => false, 'edit' => true, 'del' => true);

        #Add filter toolbar
        //$this->render_filter_toolbar = true;
    }


    protected function searchOpDateRange($c, $val)
    {
        //--------------
        // Date range
        //--------------

        if(strpos($val, ' - ') !== false)
        {
            list($start, $end) = explode(' - ', $val, 2);

            $start = strtotime(trim($start));
            $end = strtotime(trim($end));

            if(!$start or !$end)
            {
                throw new jqGrid_Exception('Invalid date format');
            }

            #Stap dates if start is bigger than end
            if($start > $end)
            {
                list($start, $end) = array($end, $start);
            }

            $start = date('Y-m-d', $start);
            $end = date('Y-m-d', $end);

            return $c['db'] . " BETWEEN '$start' AND '$end'";
        }

        //------------
        // Single date
        //------------

        $val = strtotime(trim($val));

        if(!$val)
        {
            throw new jqGrid_Exception('Invalid date format');
        }

        $val = date('Y-m-d', $val);

        return "DATE({$c['db']}) = '$val'";
    }

    protected function initDatepicker($options = null)
    {
        $options = is_array($options) ? $options : array();

        return new jqGrid_Data_Raw('function(el){$(el).datepicker(' . jqGrid_Utils::jsonEncode($options) . ');}');
    }

    protected function initDateRangePicker($options = null)
    {
        $options = is_array($options) ? $options : array();

        return new jqGrid_Data_Raw('function(el){$(el).daterangepicker(' . jqGrid_Utils::jsonEncode($options) . ');}');
    }

    protected function parseRow($r)
    {
        if ($r['driver_id'] > 0) {
            $result = $this->DB->query('SELECT * FROM drivers WHERE id=' . intval($r['driver_id']));
            $row = $this->DB->fetch($result);
            //$r['driver'] = $row['name'] . "<button class='clear-driver act-driver'>Отвязать водителя</button>";
            $r['driver'] = $row['name'];
            $r['_class'] = 'white';
        } else {
            //$r['driver'] = "<button class='set-driver act-driver'>Привязать водителя</button>";
            $r['driver'] = "";
            $r['_class'] = 'red';
        }
        $r['date'] = Yii::$app->formatter->asDatetime($r['date'], 'php:d.m.Y H:i');
        $result = $this->DB->query('SELECT * FROM rounds WHERE departure_id=' . intval($r['id']));
        $row = $this->DB->fetch($result);
        if (!empty($row)) {
            $r['_class'] = array('_row' => $r['_class'] . ' connected','date' => 'blue');
        }
        return $r;
    }

    protected function renderOptions($opts)
    {
        $opts['caption'] = 'Прилеты';
        return $opts;
    }
}