
export interface JsdocProperty {
    name: string;
    description: string;
    type: string;
}

export interface JsdocParameter {
    name: string;
    description: string;
    type: string;
}

export interface JsdocConstructor {
    name: string;
    description: string;
    parameters: Array<JsdocParameter>;
}

export interface JsdocFunction {
    name: string;
    description: string;
    parameters: Array<JsdocParameter>;
    returnvalue: JsdocParameter;
}

export interface JsdocClass {
    name: string;
    description: string;
    basename: string;
    properties: Array<JsdocProperty>;
    constructor: JsdocConstructor;
    functions: Array<JsdocFunction>;
}
