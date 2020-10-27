HTMLElement.prototype.storage = function(){
	let name = 'xstate';
	return {
		get:(id)=>{
			if (!id){
				return this.storage()._open();
			}
			let store = this.storage()._open();
			let has = store.some(item=>{
				return item.id == id;
			})
			if (has){
				return store.find(item=>{
					return item.id == id;
				})
			} else {
				return false;
			}
		},
		set:(obj)=>{
			let store = this.storage()._open().map(item=>{
				if (item.id == obj.id){
					item = obj;
				}
				return item;
			})
			let has = store.some(item=>{
				return item.id == obj.id;
			})
			if (!has){
				store.unshift(obj);
			}
			this.storage()._close(store);
		},
		trash:(id)=>{
			let store = this.storage()._open().filter(item=>{
				return item.id != id;
			});
			this.storage()._close(store);
		},
		_open:()=>{
			let store = this.getAttribute(name);
			if (!store){
				this.setAttribute(name, JSON.stringify(new Array));
				store = this.getAttribute(name);
			}
			return JSON.parse(store);
		},
		_close:(obj)=>{
			this.setAttribute(name, JSON.stringify(obj));
		}
	}
}
