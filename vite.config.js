import vitePluginImp from 'vite-plugin-imp'

export default {
  plugins: [
    vitePluginImp({
      libList: [
        {
          libName: 'react-icons',
          style: () => false,
          libDirectory: 'lib/icons'
        }
      ]
    })
  ]
}
