import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@containers', replacement: '/src/components/containers' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@types', replacement: '/src/types' },
      { find: '@interface', replacement: '/src/types/interface' },
      { find: '@enums', replacement: '/src/types/enums' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@assets', replacement: '/src/assets'},
      { find: '@images', replacement: '/src/assets/images'},
      { find: '@service', replacement: 'src/services'},
      { find: '@layout', replacement: '/src/layout'}
    ]
  }
})
