// Method 1: Web Components (Custom Elements)
class LoadGeo extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Default Title';
        const modality = this.getAttribute('modality');
        const dataid = this.getAttribute('dataid');
        const src = this.getAttribute('src');
        const task = this.getAttribute('task');
        const complexity = this.getAttribute('complexity');
        const show_cad_program = this.getAttribute('show_cad_program');

        if (show_cad_program === 'true') {
            const modelSrc = src ? `static/${task}/${modality}/${complexity}/${dataid}/${src}.png` : 'default-model.png';
            
            this.innerHTML = `
                <p style="text-align: center">${title}</p>
                <img src="${modelSrc}" alt="${title}">
            `;
        } else {
            const modelSrc = src ? `static/${task}/${modality}/${complexity}/${dataid}/${src}.gltf` : 'default-model.gltf';
            
            this.innerHTML = `
                <p style="text-align: center">${title}</p>
                <model-viewer 
                    alt="${title}"
                    src="${modelSrc}" 
                    shadow-intensity="1" 
                    camera-controls 
                    touch-action="pan-y"
                    camera-orbit="40deg 65deg"
                    style="width: auto;"
                >
                </model-viewer>
            `;
        }

    }
}
customElements.define('load-geo', LoadGeo);

// Method 1: Web Components (Custom Elements)
class LoadFolder extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Default Title';
        const modality = this.getAttribute('modality');
        const dataid = this.getAttribute('dataid');
        const task = this.getAttribute('task');
        const complexity = this.getAttribute('complexity');
        const show_cad_program = this.getAttribute('show_cad_program');
        
        this.innerHTML = `
            <div class="generation_examp">
                <div>
                    <load-geo title="Ground Truth" src="expected" modality="${modality}" complexity="${complexity}" dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}"</load-geo>
                </div>
                <div>
                    <load-geo title="Input" src="input" modality="${modality}" complexity="${complexity}"  dataid="${dataid}" task="${task}" show_cad_program=false </load-geo>
                </div>
                <div>
                    <load-geo title="${(task == "generated") ? "sample" : "top-1"}" src="0" modality="${modality}" complexity="${complexity}"  dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="${(task == "generated") ? "sample" : "top-2"}" src="1" modality="${modality}" complexity="${complexity}"  dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="${(task == "generated") ? "sample" : "top-3"}" src="2" modality="${modality}" complexity="${complexity}"  dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="${(task == "generated") ? "sample" : "top-4"}" src="3" modality="${modality}" complexity="${complexity}"  dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="${(task == "generated") ? "sample" : "top-5"}" src="4" modality="${modality}" complexity="${complexity}"  dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
            </div>
        `;
    }
}
customElements.define('load-folder', LoadFolder);

class LoadAug extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Default Title';
        const modality = "aug";
        const dataid = this.getAttribute('dataid');
        const task = "augmentations";
        const show_cad_program = this.getAttribute('show_cad_program');
        
        this.innerHTML = `
            <div class="generation_examp">
                <div>
                    <load-geo title="Original" src="orig" modality="${modality}" complexity="" dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="Augmentation" src="0" modality="${modality}"  complexity="" dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="Augmentation" src="1" modality="${modality}"  complexity="" dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="Augmentation" src="2" modality="${modality}"  complexity="" dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
                <div>
                    <load-geo title="Augmentation" src="3" modality="${modality}"  complexity="" dataid="${dataid}" task="${task}" show_cad_program="${show_cad_program}" </load-geo>
                </div>
            </div>
        `;
    }
}
customElements.define('load-aug', LoadAug);

