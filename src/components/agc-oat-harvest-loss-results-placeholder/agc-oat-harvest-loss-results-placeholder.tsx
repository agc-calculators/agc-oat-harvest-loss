
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-oat-harvest-loss-results-placeholder'
})
export class AgcOatHarvestLossResultsPlaceholder {

    

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.yield-loss">Yield Loss</h2>
                        {placeholder()}
                    </li>
                                                                 
                </ul>
            </section>
        );
    }
}