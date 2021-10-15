class Banner {
    constructor(box, lis, next, previous) {
        this.oBox = box;
        this.oLis = lis;
        this.oNext = next;
        this.oPrevious = previous;
        this.index = 0;
        this.oBox.style.backgroundImage = `url(img/banner/${this.index}.webp)`;
        this.oLis[this.index].style.backgroundColor = "red";
    }

    //设置背景图
    setBoxBgc() {
        this.oBox.style.backgroundImage = `url(img/banner/${this.index}.webp)`;
        this.oBox.style.backgroundSize = "100%";
    }

    //设置li颜色
    setColorli() {
        for (let i = 0; i < oLis.length; i++) {
            if (this.index == i) {
                this.oLis[i].style.backgroundColor = "red";
            } else {
                this.oLis[i].style.backgroundColor = "black";
            }
        }
    }

    next() {
        this.index++;
        if (this.index == this.oLis.length) {
            this.index = 0;
        }
        this.setBoxBgc();
        this.setColorli();
    }

    previous() {
        this.index--;
        if (this.index == -1) {
            this.index = this.oLis.length - 1;
        }
        this.setBoxBgc();
        this.setColorli();
    }

    clickli() {
            let that = this;
            for (let i = 0; i < oLis.length; i++) {
                this.oLis[i].onclick = function() {
                    that.index = i;
                    that.setBoxBgc();
                    that.setColorli();
                }
            }
        }
        // 定时器
    dingshi() {
        let that = this;
        let time = setInterval(function() {
            that.index++;
            if (that.index == that.oLis.length) {
                that.index = 0;
            }
            that.setBoxBgc();
            that.setColorli();
        }, 2000)
        that.oBox.onmouseover = function() {
            clearInterval(time);
        }
        this.oBox.onmouseout = function() {
            that.dingshi();
            // clearInterval(time);
        }
    }


    eventBind() {
        let that = this;
        this.oNext.onclick = function() {
            that.next();
        }
        this.oPrevious.onclick = function() {
            that.previous()
        }
        this.clickli();
        this.dingshi();

    }
}