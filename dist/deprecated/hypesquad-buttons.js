/*
BRAVERY: HOUSE_1
BRILLIANCE: HOUSE_2
BALANCE: HOUSE_3
DC_OX.webpack.findModuleProps(["joinHypeSquadOnline"]).joinHypeSquadOnline({ houseID: "HOUSE_1"})
*/

const DC_OX = {};
function webpack() {
	let webpackExports;
	if (webpackChunkdiscord_app != null) {
		let ids = ["__extra_id__"];
		webpackChunkdiscord_app.push([ids, {}, (req) => { webpackExports = req; ids.length = 0; },]);
	}
	const findModule = (filter) => {
		for (let i in webpackExports.c) {
			if (webpackExports.c.hasOwnProperty(i)) {
				let m = webpackExports.c[i].exports;
				if (!m) continue;
				if (m.__esModule && m.default) m = m.default;
				if (filter(m)) return m;
			}
		}
		return null;
	};
	const findModuleProps = (propNames) => findModule((module) => propNames.every((prop) => module[prop] !== undefined));
	const findModuleDisplayName = (name) => findModule((m) => m.displayName === name);
	return { findModule, findModuleProps, findModuleDisplayName }
}
DC_OX.webpack = webpack();

window.onclick = (ev) => {
    if(document.querySelector(".profileBadges-2pItdR.container-1gYwHN")) {
        document.querySelector(".clickable-1knRMS").onclick = () => {
            handleHypeSquadClickEvent();
            setTimeout(()=>{
                handleHypeSquadClickEvent()
            }, 100);
        }
        document.querySelector(".profileBadge22-3GAYRy").onclick = () => {
            handleHypeSquadClickEvent();
            setTimeout(()=>{
                handleHypeSquadClickEvent()
            }, 100);
        }
        document.querySelector(".profileBadges-2pItdR.container-1gYwHN").onclick = () => {
            handleHypeSquadClickEvent();
            setTimeout(()=>{
                handleHypeSquadClickEvent()
            }, 100);
        }
    }
    handleHypeSquadClickEvent()
}

function handleHypeSquadClickEvent() {
    let issettingsopen = !!Array.from(document.querySelectorAll("div")).find(a => a.innerText == "USER SETTINGS");
	if (!issettingsopen) return;
	let ishypesquadopen = document.querySelector('.item-3XjbnG.themed-2-lozF[aria-controls="hypesquad-online-tab"]').className.includes("selected-g-kMVV");
	if (!ishypesquadopen) return;
	let hashypesquad = !!document.querySelector(".membershipDialogSwitchHouses-2bOt9w");
    let html = `<div class="accountList-305sx3"><h5 class="colorStandard-21JIj7 size14-3fJ-ot h5-2RwDNl title-3hptVQ marginBottom4-1fdMNe">Hypesquad Houses</h5><div class="colorStandard-21JIj7 size14-3fJ-ot default-_FzbTF formText-2ngGjI marginBottom8-emkd0_ modeDefault-2fEh7a">Click on one of these Houses and get their Badge</div><div class="connectedAccounts-26X_gr" style="justify-content: center"><div class="wrapper-1xW8FI accountBtn-1YkMgV DC_OX_BRAVERY_BTN"><button class="inner-1lPVFp accountBtnInner-3XK70s" type="button" style="background-image: url(&quot;/assets/efcc751513ec434ea4275ecda4f61136.svg&quot;);" aria-label="Bravery"></button></div><div class="wrapper-1xW8FI accountBtn-1YkMgV DC_OX_BRILLIANCE_BTN"><button class="inner-1lPVFp accountBtnInner-3XK70s" type="button" style="background-image: url(&quot;/assets/ec8e92568a7c8f19a052ef42f862ff18.svg&quot;);" aria-label="Brilliance"></button></div><div class="wrapper-1xW8FI accountBtn-1YkMgV DC_OX_BALANCE_BTN"><button class="inner-1lPVFp accountBtnInner-3XK70s" type="button" style="background-image: url(&quot;/assets/9f00b18e292e10fc0ae84ff5332e8b0b.svg&quot;);" aria-label="Balance"></button></div></div></div>`
    if(hashypesquad) {
        document.querySelector(".colorStandard-21JIj7.size16-rrJ6ag.membershipDialogSwitchHouses-2bOt9w").innerHTML = html;
    } else {
        document.querySelector(".joinCTAWrapper-1uvBTA").children[0].innerHTML = html;
    }
    document.querySelector(".DC_OX_BRAVERY_BTN").onclick = () => {
        DC_OX.webpack.findModuleProps(["joinHypeSquadOnline"]).joinHypeSquadOnline({ houseID: "HOUSE_1"})
        document.querySelector(".DC_OX_BRAVERY_BTN").onclick = null
        document.querySelector('.item-3XjbnG.themed-2-lozF[aria-controls="hypesquad-online-tab"]').click()
    }
    document.querySelector(".DC_OX_BRILLIANCE_BTN").onclick = () => {
        DC_OX.webpack.findModuleProps(["joinHypeSquadOnline"]).joinHypeSquadOnline({ houseID: "HOUSE_2"})
        document.querySelector(".DC_OX_BRILLIANCE_BTN").onclick = null
        document.querySelector('.item-3XjbnG.themed-2-lozF[aria-controls="hypesquad-online-tab"]').click()
    }
    document.querySelector(".DC_OX_BALANCE_BTN").onclick = () => {
        DC_OX.webpack.findModuleProps(["joinHypeSquadOnline"]).joinHypeSquadOnline({ houseID: "HOUSE_3"})
        document.querySelector(".DC_OX_BALANCE_BTN").onclick = null
        document.querySelector('.item-3XjbnG.themed-2-lozF[aria-controls="hypesquad-online-tab"]').click()
    }
}
