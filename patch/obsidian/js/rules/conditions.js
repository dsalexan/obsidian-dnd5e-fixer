const CONDITION_ICONS = [
	'dead', 'bleeding', 'blinded', 'charmed', 'deafened',
	'dodging', 'exhaustion', 'frightened', 'grappled',
	'incapacitated', 'invisible', 'paralysed', 'petrified',
	'poisoned', 'prone', 'restrained', 'stunned', 'unconscious',
	'burning', 'concentrating', 'marked', 'surprised'
];

export function patchConditions () {
	CONFIG.statusEffects =
		CONDITION_ICONS.map(icon => `modules/obsidian/img/conditions/${icon}.svg`);

	Token.prototype.toggleEffect = (function () {
		const cached = Token.prototype.toggleEffect;
		return function (texture) {
			const condition = /\/([^./]+)\./.exec(texture)[1] // ADD
			
			if (!this.actor || CONDITION_ICONS.includes(condition) === false) {
				return cached.apply(this, arguments);
			}

    	// const condition = /\/([^./]+)\./.exec(texture)[1] // REMOVE
			if (condition === 'exhaustion') {
				const exhaustion = this.actor.data.data.attributes.exhaustion;
				this.actor.update({'data.attributes.exhaustion': exhaustion ? 0 : 1});
			} else {
				const toggled = !this.actor.data.flags.obsidian.attributes.conditions[condition];
				this.actor.update({
					[`flags.obsidian.attributes.conditions.${condition}`]: toggled
				});
			}
		};
	})();

	Token.prototype.drawEffects = (function () {
		const cached = Token.prototype.drawEffects;
		return function () {
			if (this.actor && this.actor.data.obsidian) {
				this.data.effects =
					Object.entries(this.actor.data.obsidian.conditions)
						.filter(([, enabled]) => enabled)
						.map(([condition,]) => `modules/obsidian/img/conditions/${condition}.svg`)
						.concat(
							this.actor.data.obsidian.toggleable
								.filter(effect => effect.activeEffect && effect.toggle.active)
								.map(effect => effect.img))
						.concat(this.data.effects.filter((effect) => CONDITION_ICONS.includes(/\/([^./]+)\./.exec(effect)[1]) === false)) // ADD
			}

			cached.apply(this, arguments);
		};
	})();
}
