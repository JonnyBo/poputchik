<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\commands;

use yii;
use yii\console\Controller;

/**
 * This command echoes the first argument that you have entered.
 *
 * This command is provided as an example for you to learn how to create console commands.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class HelloController extends Controller
{
    /**
     * This command echoes what you have entered as the message.
     * @param string $message the message to be echoed.
     */
    public function actionIndex($message = 'hello world')
    {

        $userRole = Yii::$app->authManager->getRole('driver');
        for ($i = 3; $i <= 7; $i++) {
            $userId = $i + 1;
            Yii::$app->authManager->assign($userRole, $userId);
            echo 'ok';
        }
        //echo '111111111';
        //Yii::$app->authManager->assign('driver', 101);
    }
}
