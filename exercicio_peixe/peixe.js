var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixe_turquesa.png');
    this.load.image('areia', 'assets/areia.png');
    this.load.image('ceu', 'assets/ceu.png');
}

function create() {
    let largura = this.scale.width;
    let altura = this.scale.height;

    let mar = this.add.image(largura / 2, altura / 2, 'mar');

    let areia = this.add.image(largura / 2, altura - 50, 'areia');
    areia.setDisplaySize(largura, 100);

    this.add.image(largura / 2, altura - 550, 'logo').setScale(0.5);

    peixinho = this.add.image(largura / 2, altura / 2, 'peixe');
    peixinho.setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
