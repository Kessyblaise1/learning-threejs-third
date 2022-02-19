function init() {
  // console.log("Using Three.js version: " + THREE.REVISION);
  var scene = new THREE.Scene()
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  var renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)

  var axes = new THREE.AxesHelper(20)
  // x-red, y-green, z-blue

  // adding the axis to the sreen
  scene.add(axes)

  var planeGeometry = new THREE.PlaneGeometry(60, 20)

  // to define the texture and type of material
  var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0x7a4ed7,
  })

  // create a plane by combining the Geometry and the material in a plane object
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)

  // before adding the plane to the scene, first position it correctly
  plane.rotation.x = -0.5 * Math.PI // this line makes the plane lie flat
  plane.position.set(15, 0, 0)
  scene.add(plane)
}
