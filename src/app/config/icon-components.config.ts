import { IconExternalComponent } from "../components/ui/icon/icon-external/icon-external.component";
import { IconResolverComponent } from "../components/ui/icon/icon-resolver/icon-resolver.component";
import { IconTwoColorsComponent } from "../components/ui/icon/icon-two-colors/icon-two-colors.component";
import { IconComponent } from "../components/ui/icon/icon.component";
import { ComponentStructure } from "./app.config";

export const iconComponents: Omit<ComponentStructure, 'id'>[] = [
    {
        label: 'Icons',
        title: 'Icon',
        description: 'Icon Control',
        url: 'https://taiga-ui.dev/components/icon',
        component: IconComponent,
      },
      {
        label: 'External Icons',
        title: 'External Icons',
        description: 'Icons from external source',
        url: 'https://taiga-ui.dev/components/icon#external',
        component: IconExternalComponent,
      },
      {
        label: 'Two Colors Icons',
        title: 'Two Colors Icons',
        description: 'Icons with 2 colors',
        url: 'https://taiga-ui.dev/components/icon#two-colors',
        component: IconTwoColorsComponent,
      },
      {
        label: 'Resolver Icons',
        title: 'Resolver Icons',
        description: 'User can provide your Icons using resolvers',
        url: 'https://taiga-ui.dev/components/icon#resolver',
        component: IconResolverComponent,
      },
]