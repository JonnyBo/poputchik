<?php

class jqDrivers extends jqGrid
{
    protected function init()
    {
        #Set database table
        $this->table = 'drivers';

        #Make all columns editable by default
        $this->cols_default = array('editable' => true);

        #Grid options in PHP init
        $this->options = array(
            'autowidth' => true,
            'shrinkToFit ' => true,

            #JS function in PHP are possible, but not recommended!
            'onSelectRow' => new jqGrid_Data_Raw("function(id){ 
                $('button.edit-driver').removeAttr('disabled');
                $('button.edit-driver').attr('onClick', 'openEditDriver('+id+')');
            }"
            ),
        );

        #Set columns
        $this->cols = array(

            'id' => array('label' => 'ID',
                'width' => 15,
                'align' => 'center',
                'editable' => false, //id is non-editable
            ),

            'user_id' => array('label' => 'Пользователь',
                'width' => 60,
                'align' => 'left',
                'editable' => true,
            ),

            'name' => array('label' => 'Имя',
                'width' => 60,
                'align' => 'left',
            ),

            'phone' => array('label' => 'Телефон',
                'width' => 60,
                'align' => 'left',
            ),

            'auto_model' => array('label' => 'Модель авто',
                'width' => 60,
                'align' => 'left',
            ),

            'auto_number' => array('label' => 'Номер авто',
                'width' => 60,
                'align' => 'center',
            ),

            'auto_color' => array('label' => 'Цвет авто',
                'width' => 60,
                'align' => 'center',
            ),

            'places' => array('label' => 'Кол-во мест',
                'width' => 60,
                'align' => 'center',
            ),

            'created' => array('label' => 'Дата регистрации',
                'width' => 60,
                'align' => 'center',
            ),

            'blocked' => array('label' => 'Заблокирован',
                'width' => 60,
                'align' => 'center',
            ),
        );

        #Set nav
        $this->nav = array('add' => false, 'edit' => false, 'del' => true);

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
        $r['created'] = Yii::$app->formatter->asDatetime($r['created'], 'php:d.m.Y');
        if ($r['user_id'] > 0) {
            $result = $this->DB->query('SELECT * FROM user WHERE id=' . intval($r['user_id']));
            $row = $this->DB->fetch($result);
            //$r['driver'] = $row['name'] . "<button class='clear-driver act-driver'>Отвязать водителя</button>";
            $r['user_id'] = $row['username'];
            //$r['_class'] = 'white';
        }
        return $r;
    }
}