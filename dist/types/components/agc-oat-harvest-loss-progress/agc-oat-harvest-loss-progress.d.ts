import '../../stencil.core';
export declare class AgcOatHarvestLossProgress {
    socket: string;
    currentStep: number;
    progress: HTMLDivElement;
    render(): JSX.Element;
    componentDidLoad(): void;
    agcStepChangedHandler(event: CustomEvent): void;
    agcCalculatedHandler(event: CustomEvent): void;
    componentDidUnload(): void;
}
