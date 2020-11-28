import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';
import { AuthorizeStep } from 'resources/pipelines/authorize-step';
import { MetadataStep } from 'resources/pipelines/metadata-step';
import { ScrollPageStep } from 'resources/pipelines/scroll-page-step';

@inject(Router)
export class App {
    constructor(router) {
        this.router = router;
    }

    configureRouter(config, router) {
        config.options.pushState = true;
        config.title = 'Aurelia Skeleton';
        config.addAuthorizeStep(AuthorizeStep);
        config.addPreActivateStep(ScrollPageStep);
        config.addPreRenderStep(MetadataStep);
        config.map([
            {
                route: '',
                name: 'home',
                moduleId: PLATFORM.moduleName('pages/home/home'),
                title: 'Cheapest RS3, OSRS Gold',
                settings: {
                    metaDescription: 'Join the Chicks Gold family! Keep track of your orders, receive special discounts and offers.'
                }
            }
        ]);

        config.mapUnknownRoutes(() => {
            return { redirect: '' };
        });

        this.router = router;
    }
}
