import { Type } from "@angular/core";
import { ButtonComponent } from "./components/ui/button/button.component";
import { LinkComponent } from "./components/ui/link/link.component";
import { IconComponent } from "./components/ui/icon/icon.component";

export type ComponentStructure = {
    id: number;
    label: string;
    title: string;
    description: string;
    url: string;
    component: Type<unknown>;
};

const components: ComponentStructure[] = [
    {        
        id: 1,            
        label: 'Buttons',
        title: 'Button',
        description: 'Button Control',
        url: 'https://taiga-ui.dev/components/button',
        component: ButtonComponent        
    },
    {        
        id: 2,            
        label: 'Links',
        title: 'Link',
        description: 'Link Control',
        url: 'https://taiga-ui.dev/components/link',
        component: LinkComponent
    },
    {        
        id: 3,            
        label: 'Icons',
        title: 'Icon',
        description: 'Icon Control',
        url: 'https://taiga-ui.dev/components/icon',
        component: IconComponent
    },
    {        
        id: 4,            
        label: 'Icons',
        title: 'Test Component 1',
        description: 'Icon Control',
        url: 'https://taiga-ui.dev/components/icon',
        component: IconComponent
    },
    {        
        id: 5,            
        label: 'Icons',
        title: 'Test Component 2',
        description: 'Icon Control',
        url: 'https://taiga-ui.dev/components/icon',
        component: IconComponent
    }
]

export const AppConfig = {
    components,
    componentTypeFilter: {
        label: 'Component type',
        placeHolder: 'Component type',
        items: components.map(({id, label}) => ({id, label}))
    },    
};