import React from 'react'
import styles from '../styles/CollectionCard.module.css'
const CollectionCard = ({id,name,traits,image}) => {
    return (
        <div className={styles.CollectionCard}>
            <img src={image} alt=''/>
            <div className={styles.details}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.id}>.#{id}</div>
            <div className={styles.priceContainer}>
                <img src={'./weth.png'} className={styles.wethImage} atl=""/>
                <div className={styles.price}>{traits[0]?.value}</div>
            </div>
            </div>
        </div>
    )
}

export default CollectionCard

/* Whats is IPFS, are information that cant be delete from internet and it store 
    in multiples computers, so its helpfull to decentralized information over 
    companies, Goverments. */
/*How IPFS works  */
/* https://docs.ipfs.io/concepts/how-ipfs-works/ */
/* Hashing */
/* https://docs.ipfs.io/concepts/hashing/ */

/* P2P Data Links with Content Addressing */
/*  https://proto.school/basics */
/* DAG API */
/* https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/DAG.md */
/* What is IPFS? */
/*https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization*/
/* Writing Secure node code */
/* https://www.youtube.com/watch?v=QSMbk2nLTBk */
/* https://www.bing.com/videos/search?q=web3+and+node+js+wallet&&view=detail&mid=0EA4C6A5C45E3011FD9B0EA4C6A5C45E3011FD9B&&FORM=VDRVRV */
/* https://www.bing.com/videos/search?q=web3+and+node+js+wallet&docid=608025832966472218&mid=F16558632D8A78446ED0F16558632D8A78446ED0&view=detail&FORM=VIRE */
/* https://www.youtube.com/watch?v=WSN5BaCzsbo ETH */
/* https://davekiss.com/ethereum-web3-node-tutorial/ */
/* https://davekiss.com/ethereum-web3-node-tutorial/ */
/* https://faucet.rinkeby.io/ */
/* https://medium.com/@burtrico/guide-to-using-openseas-non-fungible-token-nft-api-9b1b6e622db0 */
/* https://docs.opensea.io/reference/api-overview */
/* https://en.wikipedia.org/wiki/Remote_procedure_call */
/* E
BlockChain For Developers
-Web3
-Etherium
-Read & Write BlockChain files
-Json RPC */