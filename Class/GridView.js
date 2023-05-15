class GridView {
    /**
     *  properties
     *  @param [array] _tableClass
     *  @param [array] data  
     *  @param [array] attribute - управляем что выводим 
     *  @param [array] _element  - куда выводить таблицу
     *  @param [array] _header  
     *  @param [array] _headerClass  - css классы заголовка
     */

    constructor() {
        this._tableClass = [];
        this._header = '';
        this._headerClass = '';
        this._element = 'body';
        this.attribute = [];
    }

    header(header) {
        if (typeof header === "string" && header.trim() != '') {
            this._header = header.trim();
            return true
        }
        return false
    }

    headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true
        }
        return false
    }
    element(element) {
        if (document.querySelector(element)) {
            this._element = element
            return true
        }
        return false
    }

    render() {
        this.element(data.element);
        this.header(data.header);
        this.headerClass(data.headerClass);
        this.attribute = data.attribute;
        this.data = data.data;
        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(className => {
                header.classList.add(className)
            });
            document.querySelector(this._element).append(header);
        }
        //create table
        const table = document.createElement('table');
        this._tableClass.forEach(className =>
            table.classList.add(className));

        //show table
        let trH = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            } else {
                th.textContent = key;
            }
            trH.append(th);
        }
        table.append(trH);
        //create table
        for (let i = 0; i < this.data.length; i++) {
            let dataArr = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute) {
                let td = document.createElement('td');
                let value = dataArr[key];
                if (this.attribute[key].src) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                tr.append(td)
            }
            table.append(tr)
        }

        document.querySelector(this._element).append(table);
    }

}