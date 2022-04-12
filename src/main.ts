import ZittieEBuonni from '~/modules/app'

ZittieEBuonni.run()
  .then(() => {
    console.log('Loro non sanno di che parlo')
  })
  .catch((err) => console.log(err))
