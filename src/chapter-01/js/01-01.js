function init() {
  // first, setup the scene
  var scene = new THREE.Scene()

  // next setup the camera
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

  // position and point the camera to the center of the scene
  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 30
  camera.lookAt(scene.position)

  // create a renderer and configure it with shadows
  var renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)

  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
  })
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.castShadow = true

  // postioin the cube
  cube.position.x = -4
  cube.position.y = 2
  cube.position.z = 0

  // create the sphere Geometry
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
  })
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

  // position the sphere
  sphere.position.x = 20
  sphere.position.y = 4
  sphere.position.z = 2
  sphere.castShadow = true

  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(60, 20)
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xaaaaaa,
  })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(15, 0, 0)
  plane.recieveShadow = true

  // add objects to the scene
  scene.add(plane)
  scene.add(sphere)
  scene.add(cube)

  // add spotLight for the shadows
  var spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-40, 40, -15)
  spotLight.castShadow = true
  spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
  spotLight.shadow.camera.far = 130
  spotLight.shadow.camera.near = 40

  // add spotLight to scene
  scene.add(spotLight)

  var ambienLight = new THREE.AmbientLight(0x353535)
  scene.add(ambienLight)

  document.getElementById('webgl-output').appendChild(renderer.domElement)

  // render the 3D scene
  renderer.render(scene, camera)
}
