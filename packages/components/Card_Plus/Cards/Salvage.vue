<!-- <template>
	<div ref="container" class="three-container"></div>
</template>

<script setup lang="ts">
	import * as THREE from 'three'
	import 'three-bas';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
	import { ref, onMounted, onBeforeUnmount } from 'vue'
	import { SlideGeometry } from './SlideGeometry'

	const props = defineProps<{
		width: number
		height: number
		animationPhase: 'in' | 'out'
		imageUrls: string[]
	}>()

	const container = ref<HTMLDivElement | null>(null)
	let renderer: THREE.WebGLRenderer | null = null
	let camera: THREE.PerspectiveCamera | null = null
	let scene: THREE.Scene | null = null
	let controls: OrbitControls | null = null
	let slides: THREE.Mesh[] = []

	onMounted(() => {
		initThree()
		window.addEventListener('resize', onWindowResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', onWindowResize)
		if (renderer) renderer.dispose()
	})

	function initThree() {
		// 初始化Three.js环境
		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
		renderer.setPixelRatio(window.devicePixelRatio || 1)
		container.value?.appendChild(renderer.domElement)

		camera = new THREE.PerspectiveCamera(
			80,
			window.innerWidth / window.innerHeight,
			10,
			100000
		)
		camera.position.set(0, 0, 60)

		scene = new THREE.Scene()
		controls = new OrbitControls(camera!, renderer!.domElement)

		// 创建Slides
		slides = props.imageUrls.map((url, index) => {
			const slide = createSlide(index)
			loadTexture(url, slide)
			return slide
		})
		slides.forEach((slide) => scene?.add(slide))

		// 动画循环
		animate()
	}

	function createSlide(index: number) {
		const geometry = new THREE.PlaneGeometry(
			props.width,
			props.height,
			props.width * 2,
			props.height * 2
		)
		BAS.Utils.separateFaces(geometry)

		const slideGeometry = new SlideGeometry(geometry)
		slideGeometry.bufferUVs() // 假设 SlideGeometry 已正确实现 bufferUVs()

		// 属性初始化（参考原JS代码）
		// 假设原 Slide 类的属性包括动画参数（如 phase、speed、offset 等）
		// 这里需要将这些属性设置到 geometry 的 attributes 或 uniforms 中
		// 例如：
		slideGeometry.setAttribute(
			'phase',
			new THREE.BufferAttribute(new Float32Array([1]), 1)
		) // 动画阶段
		slideGeometry.setAttribute(
			'speed',
			new THREE.BufferAttribute(new Float32Array([0.5]), 1)
		) // 动画速度

		// 配置 BasicAnimationMaterial
		const material = new BAS.BasicAnimationMaterial({
			// 着色器代码（需要根据你的动画逻辑编写）
			vertexShader: `
      uniform float phase;
      uniform float speed;
      attribute float offset;
      void main() {
        // 动画逻辑（示例：简单的位移动画）
        vec3 pos = position + vec3(0.0, sin(offset * speed + phase) * 0.5, 0.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
			fragmentShader: `
      uniform sampler2D map;
      void main() {
        gl_FragColor = texture2D(map, uv);
      }
    `,
			uniforms: {
				map: { value: null }, // 纹理将通过 loadTexture 设置
				phase: { value: props.animationPhase === 'in' ? 0.0 : 1.0 },
				speed: { value: 0.5 },
			},
			// 其他参数（如顶点属性）
			attributes: {
				offset: { value: new Float32Array([index]) }, // 示例：根据索引设置偏移
			},
			// 其他 Three.js 材质参数
			side: THREE.DoubleSide,
			transparent: true,
		})

		return new THREE.Mesh(slideGeometry, material)
	}

	function loadTexture(url: string, mesh: THREE.Mesh) {
		const loader = new THREE.TextureLoader()
		loader.setCrossOrigin('Anonymous')
		loader.load(url, (texture) => {
			// 确保材质的 uniforms.map.value 是一个 Texture 对象
			mesh.material.uniforms.map.value = texture
			mesh.material.uniforms.map.value.needsUpdate = true
		})
	}

	function animate() {
		requestAnimationFrame(animate)
		controls?.update()

		// 更新动画时间（示例：根据时间驱动 phase）
		const time = Date.now() / 1000
		slides.forEach((slide) => {
			slide.material.uniforms.phase.value = Math.sin(time * 0.5)
		})

		renderer?.render(scene!, camera!)
	}

	function onWindowResize() {
		if (camera) {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
		}
		if (renderer) {
			renderer.setSize(window.innerWidth, window.innerHeight)
		}
	}
</script>

<style scoped>
	.three-container {
		width: 100%;
		height: 100vh;
	}
</style> -->
