import {addExtraIndex} from 'utilities'

import ENEMY from './ENEMY'
import ROLE from './ROLE'
import SHARED from './SHARED'
import ACN from './ACN'
import SCH from './SCH'
import AST from './AST'
import MNK from './MNK'
import DRG from './DRG'
import NIN from './NIN'
import BRD from './BRD'
import MCH from './MCH'
import SMN from './SMN'
import RDM from './RDM'
import WAR from './WAR'
import DRK from './DRK'

const STATUSES = {
	...ENEMY,
	...ROLE,
	...SHARED,
	...ACN,

	...WAR,

	...SCH,
	...AST,

	...MNK,
	...DRG,
	...NIN,

	...BRD,
	...MCH,

	...SMN,
	...RDM,
}

// Presumably because WoW statuses and spells share the same ID space, FFLogs adds 1m to every status ID. I'm not gonna get everyone to do that in here, so just automating it.
const correctIdsToMatchLogs = obj => {
	Object.keys(obj).forEach(key => {
		const status = obj[key]
		if (Array.isArray(status.id)) {
			status.id = status.id.map(id => id + 1000000)
		} else {
			status.id = status.id + 1000000
		}
	})
	return obj
}

addExtraIndex(correctIdsToMatchLogs(STATUSES), 'id')

export default STATUSES
