import './vnu.html';
import datatables from 'datatables.net';
import { Template } from 'meteor/templating';

Template.vnu.onCreated(function () {
  datatables(window, $);
});




