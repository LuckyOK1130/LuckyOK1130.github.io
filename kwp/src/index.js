import { ScrollSpy } from 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

setTimeout(() => new ScrollSpy(document.body, { target: document.getElementById('nav1') }));
