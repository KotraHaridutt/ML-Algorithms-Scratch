function openColab(link) {
    const colabLinks = {
        'colab_link_1': 'https://colab.research.google.com/drive/100k3uMfTWXRHMtCNQ-yG6U2vqEWK92OV',
        'colab_link_2': 'https://colab.research.google.com/drive/1324DtkDJzoOu1mNPbriLaNA4q36Q7Hmg',
        'colab_link_3': 'https://colab.research.google.com/drive/1GNsBrCG3dfC_CixW8gOmw01XXsW62GlL',
        'colab_link_4': 'https://colab.research.google.com/drive/1OATzt6WlVtiWpoyDk28LPYXydj3MTh6r'
    };

    window.open(colabLinks[link], '_blank');
}

function toggleCollapse(id) {
    const content = document.getElementById(id);
    
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
