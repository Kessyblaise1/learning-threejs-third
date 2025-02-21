function init() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene()

  // create a camera, which defines where we're looking at.
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

  // create a render and set the size
  var renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0x7a4ed7))
  renderer.setSize(window.innerWidth, window.innerHeight)

  // show axes in the screen
  var axes = new THREE.AxesHelper(60)
  scene.add(axes)

  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(60, 50)
  var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xf3f2f3,
  })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI
  console.log(Math.PI * -0.5)
  plane.position.set(15, 0, 0)

  // add the plane to the scene
  scene.add(plane)

  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  })
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

  // position the cube
  cube.position.set(-4, 3, 0)

  // add the cube to the scene
  scene.add(cube)

  // create a sphere
  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
  var sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true,
  })
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

  // position the sphere
  sphere.position.set(20, 4, 2)

  // add the sphere to the scene
  scene.add(sphere)

  // position and point the camera to the center of the scene
  camera.position.set(-30, 40, 30)
  camera.lookAt(scene.position)

  // add the output of the renderer to the html element
  document.getElementById('webgl-output').appendChild(renderer.domElement)

  // render the scene
  renderer.render(scene, camera)
}
