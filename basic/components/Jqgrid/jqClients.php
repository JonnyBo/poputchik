<?php

class jqClients extends jqGrid
{
    protected function init()
    {
        #Set database table
        $this->table = 'clients';

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
                $('button.edit-client').removeAttr('disabled');
                $('button.edit-client').attr('onClick', 'openEditClient('+id+')');
            }"
            ),
        );

        #Set columns
        $this->cols = array(

            'id' => array('label' => 'ID',
                //'width' => 15,
                'align' => 'center',
                'editable' => false, //id is non-editable
            ),

            'login' => array('label' => 'Логин',
                //'width' => 60,
                'align' => 'left',
                'hidden' => true,
            ),

            'password' => array('label' => 'Пароль',
                //'width' => 60,
                'align' => 'left',
                'hidden' => true,
            ),

            'name' => array('label' => 'Имя',
                //'width' => 60,
                'align' => 'left',
            ),

            'company' => array('label' => 'Компания',
                'width' => 60,
                'align' => 'left',
            ),

            'phone' => array('label' => 'Телефон',
                //'width' => 60,
                'align' => 'left',
            ),

            'add_phone' => array('label' => 'Доп. телефон',
                //'width' => 60,
                'align' => 'left',
            ),

            'created' => array('label' => 'Дата регистрации',
                //'width' => 60,
                'align' => 'left',
                'editable' => false, //id is non-editable
            ),

            'blocked' => array('label' => 'Заблокирован',
                //'width' => 60,
                'align' => 'left',
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

    protected function renderOptions($opts)
    {
        $opts['caption'] = 'Клиенты';
        return $opts;
    }

    protected function parseRow($r)
    {
        $r['created'] = Yii::$app->formatter->asDatetime($r['created'], 'php:d.m.Y');
        return $r;
    }
}