<?php
if (!defined("FUNC_FILE")) die("Illegal File Access");

$confor = array();
$confor['mail'] = "your_name@mail.com";
$confor['anum'] = "50";
$confor['anump'] = "10";
$confor['an'] = "1";
$confor['pr'] = "0";
$confor['ad'] = "1";
$confor['text'] = <<<HTML
[center][b][color=orangered]Услуги по обмену денежных средств[/color][/b][/center]<br>
[justify]Наш проект осуществляет обмен денежных средств банковским переводом в систему WebMoney. Произвести перевод на наш банковский счёт в Германию Вы можете из самой Германии, а так же любой другой страны Евросоюза. Обмен производится в евровалюте или в любой другой валюте по курсу к евро. Комиссия, взимаемая за обмен, составляет [b]3 %[/b] от суммы перевода. Оплата банковским переводом принимается по курсу [b]1.00 € = 1.35 &#036;[/b]. Комиссию, взимаемую системой WebMoney за перевод денежных средств мы берём на себя.[/justify]<br>
[center][b][color=orangered]Условия обмена денежных средств[/color][/b][/center]<br>
[justify]Минимальная сумма допустимая к обмену составляет [b]10 €[/b]. При обмене свыше [b]250 €[/b] Вам необходимо выслать нам фотокопию Вашего паспорта с лицевой и обратной стороны, а так же фотокопию банковской карты. Данные, указанные в паспорте и банковской карте должны соответствовать друг другу.[/justify]<br>
[justify]После отправки заявки Вы можете переводить деньги по указанным реквизитам. В комментариях к оплате (Verwendungszweck) укажите свой кошелек Z системы WebMoney, указанный Вами при оформлении заказа. На данный кошелёк будет произведён перевод денежных средств.[/justify]<br>
[justify]При соблюдении этих условий не позже, чем через 48 часов после поступления суммы на наш счет, на указанный Вами Z кошелек WebMoney будет перечислена соответствующая сумма, о чем Вы будете уведомлены по указанному Вами контактному E-Mail адресу.[/justify]
HTML;
$confor['info'] = <<<HTML
Спасибо за заказ! Ваша заявка получена и поставлена в очередь на обработку. После её проверки администратором при соответствии всем требованиям, указанным в условиях обмена, Вы получите письменное уведомление на указанный при заказе контактный E-Mail с детальной информацией для дальнейших действий. Как правило, эта операция занимает не более 24 часов.
HTML;
$confor['sendinfo'] = <<<HTML
[center][b][color=orangered]Спасибо за заказ![/color][/b][/center]<br>
[justify]Ваша заявка одобрена администратором и поставлена в очередь на обработку. Произведите оплату по указанному ниже способу. После этого, не позже, чем через 48 часов после поступления суммы на наш счет, на указанный Вами Z кошелек WebMoney будет перечислена соответствующая сумма, о чем Вы будете уведомлены по указанному Вами при заказе контактному E-Mail адресу.[/justify]
HTML;

?>