window.onload = function () {

    const fileInputsContainer = document.getElementById('fileInputs');
    const addFileButton = document.getElementById('addFile');
    const fileUploadForm = document.getElementById('fileUploadForm');

    addFileButton.addEventListener('click', function() {
        const br = document.createElement('br');
        fileInputsContainer.appendChild(br);
        const newFileInput = document.createElement('input');
        newFileInput.type = 'file';
        newFileInput.name = 'files[]';
        fileInputsContainer.appendChild(newFileInput);
        
    });


    fileUploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

}