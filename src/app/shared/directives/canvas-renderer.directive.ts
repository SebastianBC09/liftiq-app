// TODO: Out of scope for the current UI-bindings-only milestone
// (property binding, event binding, two-way binding).
//
// Will eventually own the <canvas> drawing loop for the full BlazePose
// skeleton in the real-time session screen. shared/components/skeleton-overlay
// currently renders a simplified, binding-only version (positioned divs
// instead of canvas) so it stays within today's scope.

import { Directive } from '@angular/core';

@Directive({ selector: '[appCanvasRenderer]', standalone: true })
export class CanvasRendererDirective {}
