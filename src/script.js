const { default:jQuery } = await import('jquery');
window.jquery = window.jQuery = window.$ = jQuery;
import { createPopper } from '@popperjs/core';
import "bootstrap/dist/js/bootstrap.min.js";
import './assets/js/main';