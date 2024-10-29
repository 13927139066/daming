cc.Class({
    extends: cc.Component,

    properties: {
        numberSpriteFrames: {
            default: [],
            type: cc.SpriteFrame,
        },
        numberLayoutNode: {
            default: null,
            type: cc.Node,
        },
    },
    showNumber(number) {
        this.numberLayoutNode.removeAllChildren();
        if (number === null || number === '' || isNaN(number)) {
            return;
        }
        let numberString = parseInt(number).toString();
        for (let i = 0; i < numberString.length; i++) {
            this.addNumberNode(parseInt(numberString.charAt(i)));
        }
    },
    addNumberNode(num) {
        let numNode = new cc.Node();
        numNode.width = 16;
        numNode.height = 34;
        numNode.addComponent(cc.Sprite).spriteFrame = this.numberSpriteFrames[num];
        this.numberLayoutNode.addChild(numNode);
    },
});
