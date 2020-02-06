import {MDCChip} from '@material/chips';

const chip: MDCChip = MDCChip.attachTo(document.querySelector('.test') as HTMLElement);
chip.selected = true;
