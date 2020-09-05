import {
  transition,
  trigger,
  query,
  style,
  animate,
  group, AnimationMetadata,
} from '@angular/animations';

const leftToRight: AnimationMetadata[] = [
  query(':enter, :leave',
    style({ position: 'fixed',  width: '100%' }),
    { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(-100%)' }))
    ], { optional: true }),
  ])
];

const rightToLeft: AnimationMetadata[] = [
  query(':enter, :leave',
    style({ position: 'fixed', width: '100%' }),
    { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out',
        style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
  ])
];

export const routesChangesAnimations =
  trigger('routeAnimations', [
    transition('Auth => Search', leftToRight),
    transition('Search => Auth', rightToLeft),
    transition('Answers => *', rightToLeft),
    transition('Search => Results', leftToRight),
    transition('Results => Answers', leftToRight),
    transition('Results => Search', rightToLeft),
    transition('Results => *', rightToLeft),
  ]);
