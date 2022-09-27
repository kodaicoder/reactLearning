// @ts-check
import { defineConfig,Styling,Framework   } from 'agrippa';

export default defineConfig({
  options: {
    baseDir: 'src/components' ,
    styling: Styling.CSS,
    framework: Framework.REACT,
    reactOptions: {
      importReact: true
    },
}
});