import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import GPS from './views/g-p-s'
import SuppContracts from './views/supp-contracts'
import Index from './views/index'
import ContractFees from './views/contract-fees'
import FileValSignatures from './views/file-val-signatures'
import GAP from './views/g-a-p'
import DataMatch from './views/data-match'
import ServiceContract from './views/service-contract'
import Title from './views/title'
import Misc from './views/misc'
import Warranty from './views/warranty'
import TruthinLending from './views/truthin-lending'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: '11. GPS',
      path: '/file-dd-21111111111',
      component: GPS,
    },
    {
      name: '2. Supp. Contracts',
      path: '/file-dd-21',
      component: SuppContracts,
    },
    {
      name: 'Index',
      path: '/',
      component: Index,
    },
    {
      name: '6. Contract & Fees',
      path: '/file-dd-211111',
      component: ContractFees,
    },
    {
      name: '1. File Val. & Signatures',
      path: '/file-val-signatures',
      component: FileValSignatures,
    },
    {
      name: '8. GAP',
      path: '/file-dd-21111111',
      component: GAP,
    },
    {
      name: '4. Data Match',
      path: '/file-dd-2111',
      component: DataMatch,
    },
    {
      name: '9. Service Contract',
      path: '/file-dd-211111111',
      component: ServiceContract,
    },
    {
      name: '10. Title',
      path: '/file-dd-2111111111',
      component: Title,
    },
    {
      name: '3. Misc.',
      path: '/file-dd-211',
      component: Misc,
    },
    {
      name: '7. Warranty',
      path: '/file-dd-2111111',
      component: Warranty,
    },
    {
      name: '5. Truth in Lending',
      path: '/file-dd-21111',
      component: TruthinLending,
    },
  ],
})
