const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BOw5ME0O.js","assets/index-CEfBe_JY.css","assets/ragdoll-DRVv_tMe.js","assets/glbCache-CSFa5rQu.js","assets/canons-D0aAPXPE.js"])))=>i.map(i=>d[i]);
import{Z as Ys,X as Zs,d as $s,h as ec,W as tc,a0 as nc,_ as Oa,L as pt}from"./index-BOw5ME0O.js";import{U as Te,j as ic,N as nn,e as Pt,C as Fe,k as ac,m as ot,w as Ke,V as Lt,n as ka,o as Xt,q as ao,W as Ha,r as Kt,t as Ze,u as en,v as St,x as kt,y as Rt,z as Fn,E as he,I as rc,J as Va,K as oc,O as sc,Q as kn,X as cc,Y as Ac,Z as lc,_ as fc,$ as dc,a0 as uc,a1 as pc,a2 as hc,a3 as gc,a4 as mc,a5 as Ec,a6 as _c,a7 as bc,a8 as Ic,a9 as Cc,aa as ro,ab as hi,R as Zn,ac as fi,ad as gt,ae as zn,af as _a,ag as qt,ah as vc,ai as Sc,aj as ba,ak as xc,al as Ia,am as Mc,an as Bc,ao as Tc,ap as Rc,aq as wc,ar as cn,as as Mt,B as An,g as an,M as He,at as di,au as Dc,av as sn,aw as Kn,ax as zt,ay as gi,az as yt,aA as Nn,aB as Lc,aC as vn,aD as Wa,aE as yc,aF as Ca,aG as at,aH as Uc,P as Jn,aI as Pc,aJ as wi,aK as xt,aL as Bn,aM as $n,aN as Fc,aO as oo,aP as Nc,aQ as pn,aR as Ge,aS as Qc,aT as so,aU as co,aV as Ao,aW as Qn,aX as lo,aY as fo,aZ as Gc,a_ as Oc,a$ as kc,b0 as Hc,b1 as Vc,b2 as Wc,b3 as qc,b4 as zc,b5 as qa,b6 as Kc,b7 as ui,b8 as Xc,b9 as za,ba as Ka,A as Tn,bb as Jc,bc as xi,bd as Xa,be as jc,bf as tn,bg as ta,a as ei,bh as uo,bi as po,bj as Yc,bk as ho,bl as va,bm as Sa,bn as Zc,bo as $c,bp as go,bq as eA,br as mi,bs as Rn,bt as jn,bu as Dn,bv as Di,bw as Ln,bx as na,by as Ja,bz as ti,bA as Ei,bB as ia,bC as _i,bD as bi,bE as aa,bF as ra,bG as Ii,bH as oa,bI as yn,bJ as ja,bK as Ya,bL as Za,bM as Yn,bN as $a,bO as er,bP as tr,bQ as nr,bR as ir,bS as ar,bT as rr,bU as or,bV as sr,bW as ni,bX as cr,bY as sa,bZ as ca,b_ as Aa,b$ as Ci,c0 as la,c1 as mo,c2 as Ar,c3 as Eo,c4 as lr,c5 as Dt,c6 as tA,c7 as _o,c8 as bo,c9 as Io,ca as Co,cb as vo,cc as So,cd as xo,ce as Li,cf as yi,cg as nA,ch as iA,ci as Nt,cj as ii,ck as Gn,d as Vt,cl as aA,cm as rA,cn as oA,co as sA,cp as Mo,cq as fa,cr as cA,cs as AA,ct as lA,cu as fA,cv as da,cw as Bo,cx as xa,cy as hn,cz as In,cA as rn,cB as dA,cC as uA,D as pA,cD as To,cE as it,cF as fr,cG as Ro,T as wo,cH as hA,cI as Do,cJ as Lo,cK as Ui,h as yo,cL as Uo,cM as gA,cN as Ma,L as Po,cO as mA,cP as EA,cQ as Fo,G as qe,cR as bn,cS as _A,cT as No,cU as bA,cV as IA,cW as Qo,cX as Go,cY as dr,cZ as ur,c_ as pr,c$ as CA,d0 as Un,d1 as vA,d2 as SA,d3 as xA,d4 as Oo,c as ko,d5 as Ut,d6 as Ot,d7 as ua,d8 as Cn,b as vi,d9 as MA,da as BA,db as TA,dc as RA,dd as wA,l as oi,de as DA,df as hr,dg as Pi,dh as LA,di as yA,dj as gr,i as UA}from"./glbCache-CSFa5rQu.js";import{C as PA}from"./canons-D0aAPXPE.js";function Ho(){let t=null,n=!1,e=null,i=null;function a(r,o){i=t.requestAnimationFrame(a),e(r,o)}return{start:function(){n!==!0&&e!==null&&t!==null&&(i=t.requestAnimationFrame(a),n=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){e=r},setContext:function(r){t=r}}}function FA(t){const n=new WeakMap;function e(s,c){const A=s.array,h=s.usage,p=A.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,A,h),s.onUploadCallback();let m;if(A instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&A instanceof Float16Array)m=t.HALF_FLOAT;else if(A instanceof Uint16Array)s.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(A instanceof Int16Array)m=t.SHORT;else if(A instanceof Uint32Array)m=t.UNSIGNED_INT;else if(A instanceof Int32Array)m=t.INT;else if(A instanceof Int8Array)m=t.BYTE;else if(A instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:d,type:m,bytesPerElement:A.BYTES_PER_ELEMENT,version:s.version,size:p}}function i(s,c,A){const h=c.array,p=c.updateRanges;if(t.bindBuffer(A,s),p.length===0)t.bufferSubData(A,0,h);else{p.sort((m,b)=>m.start-b.start);let d=0;for(let m=1;m<p.length;m++){const b=p[d],M=p[m];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++d,p[d]=M)}p.length=d+1;for(let m=0,b=p.length;m<b;m++){const M=p[m];t.bufferSubData(A,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=n.get(s);c&&(t.deleteBuffer(c.buffer),n.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=n.get(s);(!h||h.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const A=n.get(s);if(A===void 0)n.set(s,e(s,c));else if(A.version<s.version){if(A.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(A.buffer,s,c),A.version=s.version}}return{get:a,remove:r,update:o}}var NA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,el=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,il=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,al=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ol=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Al=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ll=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ul="gl_FragColor = linearToOutputTexel( gl_FragColor );",pl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ml=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,El=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_l=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Il=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ml=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Rl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ll=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ul=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pl=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ql=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gl=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ol=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ql=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$l=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,td=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,id=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:NA,alphahash_pars_fragment:QA,alphamap_fragment:GA,alphamap_pars_fragment:OA,alphatest_fragment:kA,alphatest_pars_fragment:HA,aomap_fragment:VA,aomap_pars_fragment:WA,batching_pars_vertex:qA,batching_vertex:zA,begin_vertex:KA,beginnormal_vertex:XA,bsdfs:JA,iridescence_fragment:jA,bumpmap_pars_fragment:YA,clipping_planes_fragment:ZA,clipping_planes_pars_fragment:$A,clipping_planes_pars_vertex:el,clipping_planes_vertex:tl,color_fragment:nl,color_pars_fragment:il,color_pars_vertex:al,color_vertex:rl,common:ol,cube_uv_reflection_fragment:sl,defaultnormal_vertex:cl,displacementmap_pars_vertex:Al,displacementmap_vertex:ll,emissivemap_fragment:fl,emissivemap_pars_fragment:dl,colorspace_fragment:ul,colorspace_pars_fragment:pl,envmap_fragment:hl,envmap_common_pars_fragment:gl,envmap_pars_fragment:ml,envmap_pars_vertex:El,envmap_physical_pars_fragment:Rl,envmap_vertex:_l,fog_vertex:bl,fog_pars_vertex:Il,fog_fragment:Cl,fog_pars_fragment:vl,gradientmap_pars_fragment:Sl,lightmap_pars_fragment:xl,lights_lambert_fragment:Ml,lights_lambert_pars_fragment:Bl,lights_pars_begin:Tl,lights_toon_fragment:wl,lights_toon_pars_fragment:Dl,lights_phong_fragment:Ll,lights_phong_pars_fragment:yl,lights_physical_fragment:Ul,lights_physical_pars_fragment:Pl,lights_fragment_begin:Fl,lights_fragment_maps:Nl,lights_fragment_end:Ql,lightprobes_pars_fragment:Gl,logdepthbuf_fragment:Ol,logdepthbuf_pars_fragment:kl,logdepthbuf_pars_vertex:Hl,logdepthbuf_vertex:Vl,map_fragment:Wl,map_pars_fragment:ql,map_particle_fragment:zl,map_particle_pars_fragment:Kl,metalnessmap_fragment:Xl,metalnessmap_pars_fragment:Jl,morphinstance_vertex:jl,morphcolor_vertex:Yl,morphnormal_vertex:Zl,morphtarget_pars_vertex:$l,morphtarget_vertex:ef,normal_fragment_begin:tf,normal_fragment_maps:nf,normal_pars_fragment:af,normal_pars_vertex:rf,normal_vertex:of,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:lf,iridescence_pars_fragment:ff,opaque_fragment:df,packing:uf,premultiplied_alpha_fragment:pf,project_vertex:hf,dithering_fragment:gf,dithering_pars_fragment:mf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:If,shadowmap_vertex:Cf,shadowmask_pars_fragment:vf,skinbase_vertex:Sf,skinning_pars_vertex:xf,skinning_vertex:Mf,skinnormal_vertex:Bf,specularmap_fragment:Tf,specularmap_pars_fragment:Rf,tonemapping_fragment:wf,tonemapping_pars_fragment:Df,transmission_fragment:Lf,transmission_pars_fragment:yf,uv_pars_fragment:Uf,uv_pars_vertex:Pf,uv_vertex:Ff,worldpos_vertex:Nf,background_vert:Qf,background_frag:Gf,backgroundCube_vert:Of,backgroundCube_frag:kf,cube_vert:Hf,cube_frag:Vf,depth_vert:Wf,depth_frag:qf,distance_vert:zf,distance_frag:Kf,equirect_vert:Xf,equirect_frag:Jf,linedashed_vert:jf,linedashed_frag:Yf,meshbasic_vert:Zf,meshbasic_frag:$f,meshlambert_vert:ed,meshlambert_frag:td,meshmatcap_vert:nd,meshmatcap_frag:id,meshnormal_vert:ad,meshnormal_frag:rd,meshphong_vert:od,meshphong_frag:sd,meshphysical_vert:cd,meshphysical_frag:Ad,meshtoon_vert:ld,meshtoon_frag:fd,points_vert:dd,points_frag:ud,shadow_vert:pd,shadow_frag:hd,sprite_vert:gd,sprite_frag:md},Ae={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new he},probesMax:{value:new he},probesResolution:{value:new he}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},$t={basic:{uniforms:Dt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Dt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Dt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Dt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Dt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Dt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Dt([Ae.points,Ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Dt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Dt([Ae.common,Ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Dt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Dt([Ae.sprite,Ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Dt([Ae.common,Ae.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Dt([Ae.lights,Ae.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};$t.physical={uniforms:Dt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const si={r:0,b:0,g:0},Ed=new Xt,Vo=new Ge;Vo.set(-1,0,0,0,1,0,0,0,1);function _d(t,n,e,i,a,r){const o=new Fe(0);let s=a===!0?0:1,c,A,h=null,p=0,d=null;function m(C){let B=C.isScene===!0?C.background:null;if(B&&B.isTexture){const _=C.backgroundBlurriness>0;B=n.get(B,_)}return B}function b(C){let B=!1;const _=m(C);_===null?u(o,s):_&&_.isColor&&(u(_,1),B=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(t.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(C,B){const _=m(B);_&&(_.isCubeTexture||_.mapping===xi)?(A===void 0&&(A=new He(new tn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ta($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(I,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(A)),A.material.uniforms.envMap.value=_,A.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,A.material.uniforms.backgroundRotation.value.setFromMatrix4(Ed.makeRotationFromEuler(B.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&A.material.uniforms.backgroundRotation.value.premultiply(Vo),A.material.toneMapped=Ze.getTransfer(_.colorSpace)!==at,(h!==_||p!==_.version||d!==t.toneMapping)&&(A.material.needsUpdate=!0,h=_,p=_.version,d=t.toneMapping),A.layers.enableAll(),C.unshift(A,A.geometry,A.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new He(new ei(2,2),new cn({name:"BackgroundMaterial",uniforms:ta($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,d=t.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function u(C,B){C.getRGB(si,uo(t)),e.buffers.color.setClear(si.r,si.g,si.b,B,r)}function l(){A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,B=1){o.set(C),s=B,u(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(C){s=C,u(o,s)},render:b,addToRenderList:M,dispose:l}}function bd(t,n){const e=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,o=!1;function s(N,O,q,y,V){let K=!1;const X=p(N,y,q,O);r!==X&&(r=X,A(r.object)),K=m(N,y,q,V),K&&b(N,y,q,V),V!==null&&n.update(V,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(N,O,q,y),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function c(){return t.createVertexArray()}function A(N){return t.bindVertexArray(N)}function h(N){return t.deleteVertexArray(N)}function p(N,O,q,y){const V=y.wireframe===!0;let K=i[O.id];K===void 0&&(K={},i[O.id]=K);const X=N.isInstancedMesh===!0?N.id:0;let te=K[X];te===void 0&&(te={},K[X]=te);let j=te[q.id];j===void 0&&(j={},te[q.id]=j);let ee=j[V];return ee===void 0&&(ee=d(c()),j[V]=ee),ee}function d(N){const O=[],q=[],y=[];for(let V=0;V<e;V++)O[V]=0,q[V]=0,y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:y,object:N,attributes:{},index:null}}function m(N,O,q,y){const V=r.attributes,K=O.attributes;let X=0;const te=q.getAttributes();for(const j in te)if(te[j].location>=0){const Y=V[j];let ge=K[j];if(ge===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),Y===void 0||Y.attribute!==ge||ge&&Y.data!==ge.data)return!0;X++}return r.attributesNum!==X||r.index!==y}function b(N,O,q,y){const V={},K=O.attributes;let X=0;const te=q.getAttributes();for(const j in te)if(te[j].location>=0){let Y=K[j];Y===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const ge={};ge.attribute=Y,Y&&Y.data&&(ge.data=Y.data),V[j]=ge,X++}r.attributes=V,r.attributesNum=X,r.index=y}function M(){const N=r.newAttributes;for(let O=0,q=N.length;O<q;O++)N[O]=0}function u(N){l(N,0)}function l(N,O){const q=r.newAttributes,y=r.enabledAttributes,V=r.attributeDivisors;q[N]=1,y[N]===0&&(t.enableVertexAttribArray(N),y[N]=1),V[N]!==O&&(t.vertexAttribDivisor(N,O),V[N]=O)}function C(){const N=r.newAttributes,O=r.enabledAttributes;for(let q=0,y=O.length;q<y;q++)O[q]!==N[q]&&(t.disableVertexAttribArray(q),O[q]=0)}function B(N,O,q,y,V,K,X){X===!0?t.vertexAttribIPointer(N,O,q,V,K):t.vertexAttribPointer(N,O,q,y,V,K)}function _(N,O,q,y){M();const V=y.attributes,K=q.getAttributes(),X=O.defaultAttributeValues;for(const te in K){const j=K[te];if(j.location>=0){let ee=V[te];if(ee===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const Y=ee.normalized,ge=ee.itemSize,be=n.get(ee);if(be===void 0)continue;const $e=be.buffer,Xe=be.type,Je=be.bytesPerElement,W=Xe===t.INT||Xe===t.UNSIGNED_INT||ee.gpuType===go;if(ee.isInterleavedBufferAttribute){const Z=ee.data,ve=Z.stride,Le=ee.offset;if(Z.isInstancedInterleavedBuffer){for(let me=0;me<j.locationSize;me++)l(j.location+me,Z.meshPerAttribute);N.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<j.locationSize;me++)u(j.location+me);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let me=0;me<j.locationSize;me++)B(j.location+me,ge/j.locationSize,Xe,Y,ve*Je,(Le+ge/j.locationSize*me)*Je,W)}else{if(ee.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)l(j.location+Z,ee.meshPerAttribute);N.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Z=0;Z<j.locationSize;Z++)u(j.location+Z);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Z=0;Z<j.locationSize;Z++)B(j.location+Z,ge/j.locationSize,Xe,Y,ge*Je,ge/j.locationSize*Z*Je,W)}}else if(X!==void 0){const Y=X[te];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(j.location,Y);break;case 3:t.vertexAttrib3fv(j.location,Y);break;case 4:t.vertexAttrib4fv(j.location,Y);break;default:t.vertexAttrib1fv(j.location,Y)}}}}C()}function I(){x();for(const N in i){const O=i[N];for(const q in O){const y=O[q];for(const V in y){const K=y[V];for(const X in K)h(K[X].object),delete K[X];delete y[V]}}delete i[N]}}function v(N){if(i[N.id]===void 0)return;const O=i[N.id];for(const q in O){const y=O[q];for(const V in y){const K=y[V];for(const X in K)h(K[X].object),delete K[X];delete y[V]}}delete i[N.id]}function T(N){for(const O in i){const q=i[O];for(const y in q){const V=q[y];if(V[N.id]===void 0)continue;const K=V[N.id];for(const X in K)h(K[X].object),delete K[X];delete V[N.id]}}}function E(N){for(const O in i){const q=i[O],y=N.isInstancedMesh===!0?N.id:0,V=q[y];if(V!==void 0){for(const K in V){const X=V[K];for(const te in X)h(X[te].object),delete X[te];delete V[K]}delete q[y],Object.keys(q).length===0&&delete i[O]}}}function x(){L(),o=!0,r!==a&&(r=a,A(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:x,resetDefaultState:L,dispose:I,releaseStatesOfGeometry:v,releaseStatesOfObject:E,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:u,disableUnusedAttributes:C}}function Id(t,n,e){let i;function a(c){i=c}function r(c,A){t.drawArrays(i,c,A),e.update(A,i,1)}function o(c,A,h){h!==0&&(t.drawArraysInstanced(i,c,A,h),e.update(A,i,h))}function s(c,A,h){if(h===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,A,0,h);let d=0;for(let m=0;m<h;m++)d+=A[m];e.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s}function Cd(t,n,e,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const T=n.get("EXT_texture_filter_anisotropic");a=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(T){return!(T!==xt&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const E=T===St&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(T!==Te&&T!==yt&&!E&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let A=e.precision!==void 0?e.precision:"highp";const h=c(A);h!==A&&(Ke("WebGLRenderer:",A,"not supported, using",h,"instead."),A=h);const p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&n.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),u=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),l=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),B=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=t.getParameter(t.MAX_SAMPLES),v=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:A,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:u,maxAttributes:l,maxVertexUniforms:C,maxVaryings:B,maxFragmentUniforms:_,maxSamples:I,samples:v}}function vd(t){const n=this;let e=null,i=0,a=!1,r=!1;const o=new Qc,s=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||a;return a=d,i=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,m){const b=p.clippingPlanes,M=p.clipIntersection,u=p.clipShadows,l=t.get(p);if(!a||b===null||b.length===0||r&&!u)r?h(null):A();else{const C=r?0:i,B=C*4;let _=l.clippingState||null;c.value=_,_=h(b,d,B,m);for(let I=0;I!==B;++I)_[I]=e[I];l.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function A(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function h(p,d,m,b){const M=p!==null?p.length:0;let u=null;if(M!==0){if(u=c.value,b!==!0||u===null){const l=m+M*4,C=d.matrixWorldInverse;s.getNormalMatrix(C),(u===null||u.length<l)&&(u=new Float32Array(l));for(let B=0,_=m;B!==M;++B,_+=4)o.copy(p[B]).applyMatrix4(C,s),o.normal.toArray(u,_),u[_+3]=o.constant}c.value=u,c.needsUpdate=!0}return n.numPlanes=M,n.numIntersection=0,u}}const wn=4,Sd=6,xd=20,Md=256,Hn=new Ca,mr=new Fe;let Fi=null,Ni=0,Qi=0,Gi=!1;const Bd=new he,mn=new he;class Er{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,e=0,i=.1,a=100,r={}){const{size:o=256,position:s=Bd}=r;Fi=this._renderer.getRenderTarget(),Ni=this._renderer.getActiveCubeFace(),Qi=this._renderer.getActiveMipmapLevel(),Gi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(n,i,a,c,s),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(n,e=null){return this._fromTexture(n,e)}fromCubemap(n,e=null){return this._fromTexture(n,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ir(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=br(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Fi,Ni,Qi),this._renderer.xr.enabled=Gi,n.scissorTest=!1,Mn(n,0,0,n.width,n.height)}_fromTexture(n,e){n.mapping===ii||n.mapping===Gn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Fi=this._renderer.getRenderTarget(),Ni=this._renderer.getActiveCubeFace(),Qi=this._renderer.getActiveMipmapLevel(),Gi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:St,format:xt,colorSpace:Nt,depthBuffer:!1},a=_r(n,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_r(n,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Td(r)),this._blurMaterial=wd(r,n,e),this._ggxMaterial=Rd(r,n,e)}return a}_compileMaterial(n){const e=new He(new An,n);this._renderer.compile(e,Hn)}_sceneToCubeUV(n,e,i,a,r){const c=new Jn(90,1,e,i),A=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(mr),p.toneMapping=nn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new tn,new Vt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,u=M.material;let l=!1;const C=n.background;C?C.isColor&&(u.color.copy(C),n.background=null,l=!0):(u.color.copy(mr),l=!0);for(let B=0;B<6;B++){const _=B%3;_===0?(c.up.set(0,A[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[B],r.y,r.z)):_===1?(c.up.set(0,0,A[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[B],r.z)):(c.up.set(0,A[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[B]));const I=this._cubeSize;Mn(a,_*I,B>2?I:0,I,I),p.setRenderTarget(a),l&&p.render(M,c),p.render(n,c)}p.toneMapping=m,p.autoClear=d,n.background=C}_textureToCubeUV(n,e){const i=this._renderer,a=n.mapping===ii||n.mapping===Gn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ir()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=br());const r=a?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const s=r.uniforms;s.envMap.value=n;const c=this._cubeSize;Mn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Hn)}_applyPMREM(n){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(n,r-1,r);e.autoClear=i}_applyGGXFilter(n,e,i){const a=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;const c=o.uniforms,A=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(A*A-h*h),d=A*1.25,m=p*d,{_lodMax:b}=this,M=this._sizeLods[i],u=3*M*(i>b-wn?i-b+wn:0),l=4*(this._cubeSize-M);c.envMap.value=n.texture,c.roughness.value=m,c.mipInt.value=b-e,Mn(r,u,l,3*M,2*M),a.setRenderTarget(r),a.render(s,Hn),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=b-i,Mn(n,u,l,3*M,2*M),a.setRenderTarget(n),a.render(s,Hn)}_blur(n,e,i,a){const r=this._pingPongRenderTarget,o=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(n,r,e,i,o),this._blurPass(r,n,i,i,o)}_blurPass(n,e,i,a,r){const o=this._renderer,s=this._blurMaterial,c=this._lodMeshes[a];c.material=s;const A=s.uniforms;A.envMap.value=n.texture,A.sigma.value=r,A.mipInt.value=this._lodMax-i;const h=this._sizeLods[a],p=3*h*(a>this._lodMax-wn?a-this._lodMax+wn:0),d=4*(this._cubeSize-h);Mn(e,p,d,3*h,2*h),o.setRenderTarget(e),o.render(c,Hn)}}function Td(t){const n=[],e=[];let i=t;const a=t-wn+1+Sd;for(let r=0;r<a;r++){const o=Math.pow(2,i);n.push(o);const s=1/(o-2),c=-s,A=1+s,h=[c,c,A,c,A,A,c,c,A,A,c,A],p=6,d=6,m=3,b=new Float32Array(m*d*p),M=new Float32Array(m*d*p);for(let l=0;l<p;l++){const C=l%3*2/3-1,B=l>2?0:-1,_=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];b.set(_,m*d*l);for(let I=0;I<d;I++){const v=h[I*2]*2-1,T=h[I*2+1]*2-1;l===0?mn.set(1,T,v):l===1?mn.set(-v,1,-T):l===2?mn.set(-v,T,1):l===3?mn.set(-1,T,-v):l===4?mn.set(-v,-1,T):mn.set(v,T,-1),mn.toArray(M,(l*d+I)*m)}}const u=new An;u.setAttribute("position",new an(b,m)),u.setAttribute("outputDirection",new an(M,m)),e.push(new He(u,null)),i>wn&&i--}return{lodMeshes:e,sizeLods:n}}function _r(t,n,e){const i=new Kt(t,n,e);return i.texture.mapping=xi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mn(t,n,e,i,a){t.viewport.set(n,e,i,a),t.scissor.set(n,e,i,a)}function Rd(t,n,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Md,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function wd(t,n,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:xd,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function br(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Ir(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Mi(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wo extends Kt{constructor(n=1,e={}){super(n,n,e),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},a=[i,i,i,i,i,i];this.texture=new po(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new tn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:sn});r.uniforms.tEquirect.value=e;const o=new He(a,r),s=e.minFilter;return e.minFilter===en&&(e.minFilter=gt),new Yc(1,10,this).update(n,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(n,e=!0,i=!0,a=!0){const r=n.getRenderTarget();for(let o=0;o<6;o++)n.setRenderTarget(this,o),n.clear(e,i,a);n.setRenderTarget(r)}}function Dd(t){let n=new WeakMap,e=new WeakMap,i=null;function a(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Li||m===yi)if(n.has(d)){const b=n.get(d).texture;return s(b,d.mapping)}else{const b=d.image;if(b&&b.height>0){const M=new Wo(b.height);return M.fromEquirectangularTexture(t,d),n.set(d,M),d.addEventListener("dispose",A),s(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,b=m===Li||m===yi,M=m===ii||m===Gn;if(b||M){let u=e.get(d);const l=u!==void 0?u.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==l)return i===null&&(i=new Er(t)),u=b?i.fromEquirectangular(d,u):i.fromCubemap(d,u),u.texture.pmremVersion=d.pmremVersion,e.set(d,u),u.texture;if(u!==void 0)return u.texture;{const C=d.image;return b&&C&&C.height>0||M&&C&&c(C)?(i===null&&(i=new Er(t)),u=b?i.fromEquirectangular(d):i.fromCubemap(d),u.texture.pmremVersion=d.pmremVersion,e.set(d,u),d.addEventListener("dispose",h),u.texture):null}}}return d}function s(d,m){return m===Li?d.mapping=ii:m===yi&&(d.mapping=Gn),d}function c(d){let m=0;const b=6;for(let M=0;M<b;M++)d[M]!==void 0&&m++;return m===b}function A(d){const m=d.target;m.removeEventListener("dispose",A);const b=n.get(m);b!==void 0&&(n.delete(m),b.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const b=e.get(m);b!==void 0&&(e.delete(m),b.dispose())}function p(){n=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function Ld(t){const n={};function e(i){if(n[i]!==void 0)return n[i];const a=t.getExtension(i);return n[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&Nc("WebGLRenderer: "+i+" extension not supported."),a}}}function yd(t,n,e,i){const a={},r=new WeakMap;function o(p){const d=p.target;d.index!==null&&n.remove(d.index);for(const b in d.attributes)n.remove(d.attributes[b]);d.removeEventListener("dispose",o),delete a[d.id];const m=r.get(d);m&&(n.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function s(p,d){return a[d.id]===!0||(d.addEventListener("dispose",o),a[d.id]=!0,e.memory.geometries++),d}function c(p){const d=p.attributes;for(const m in d)n.update(d[m],t.ARRAY_BUFFER)}function A(p){const d=[],m=p.index,b=p.attributes.position;let M=0;if(b===void 0)return;if(m!==null){const C=m.array;M=m.version;for(let B=0,_=C.length;B<_;B+=3){const I=C[B+0],v=C[B+1],T=C[B+2];d.push(I,v,v,T,T,I)}}else{const C=b.array;M=b.version;for(let B=0,_=C.length/3-1;B<_;B+=3){const I=B+0,v=B+1,T=B+2;d.push(I,v,v,T,T,I)}}const u=new(b.count>=65535?nA:iA)(d,1);u.version=M;const l=r.get(p);l&&n.remove(l),r.set(p,u)}function h(p){const d=r.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&A(p)}else A(p);return r.get(p)}return{get:s,update:c,getWireframeAttribute:h}}function Ud(t,n,e){let i;function a(p){i=p}let r,o;function s(p){r=p.type,o=p.bytesPerElement}function c(p,d){t.drawElements(i,d,r,p*o),e.update(d,i,1)}function A(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,r,p*o,m),e.update(d,i,m))}function h(p,d,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,m);let M=0;for(let u=0;u<m;u++)M+=d[u];e.update(M,i,1)}this.setMode=a,this.setIndex=s,this.render=c,this.renderInstances=A,this.renderMultiDraw=h}function Pd(t){const n={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(e.calls++,o){case t.TRIANGLES:e.triangles+=s*(r/3);break;case t.LINES:e.lines+=s*(r/2);break;case t.LINE_STRIP:e.lines+=s*(r-1);break;case t.LINE_LOOP:e.lines+=s*r;break;case t.POINTS:e.points+=s*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:n,render:e,programs:null,autoReset:!0,reset:a,update:i}}function Fd(t,n,e){const i=new WeakMap,a=new Lt;function r(o,s,c){const A=o.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(s);if(d===void 0||d.count!==p){let x=function(){T.dispose(),i.delete(s),s.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const m=s.morphAttributes.position!==void 0,b=s.morphAttributes.normal!==void 0,M=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],C=s.morphAttributes.color||[];let B=0;m===!0&&(B=1),b===!0&&(B=2),M===!0&&(B=3);let _=s.attributes.position.count*B,I=1;_>n.maxTextureSize&&(I=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const v=new Float32Array(_*I*4*p),T=new mo(v,_,I,p);T.type=yt,T.needsUpdate=!0;const E=B*4;for(let L=0;L<p;L++){const N=u[L],O=l[L],q=C[L],y=_*I*4*L;for(let V=0;V<N.count;V++){const K=V*E;m===!0&&(a.fromBufferAttribute(N,V),v[y+K+0]=a.x,v[y+K+1]=a.y,v[y+K+2]=a.z,v[y+K+3]=0),b===!0&&(a.fromBufferAttribute(O,V),v[y+K+4]=a.x,v[y+K+5]=a.y,v[y+K+6]=a.z,v[y+K+7]=0),M===!0&&(a.fromBufferAttribute(q,V),v[y+K+8]=a.x,v[y+K+9]=a.y,v[y+K+10]=a.z,v[y+K+11]=q.itemSize===4?a.w:1)}}d={count:p,texture:T,size:new Mt(_,I)},i.set(s,d),s.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,e);else{let m=0;for(let M=0;M<A.length;M++)m+=A[M];const b=s.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",A)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function Nd(t,n,e,i,a){let r=new WeakMap;function o(A){const h=a.render.frame,p=A.geometry,d=n.get(A,p);if(r.get(d)!==h&&(n.update(d),r.set(d,h)),A.isInstancedMesh&&(A.hasEventListener("dispose",c)===!1&&A.addEventListener("dispose",c),r.get(A)!==h&&(e.update(A.instanceMatrix,t.ARRAY_BUFFER),A.instanceColor!==null&&e.update(A.instanceColor,t.ARRAY_BUFFER),r.set(A,h))),A.isSkinnedMesh){const m=A.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function s(){r=new WeakMap}function c(A){const h=A.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:s}}const Qd={[xo]:"LINEAR_TONE_MAPPING",[So]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[Io]:"AGX_TONE_MAPPING",[bo]:"NEUTRAL_TONE_MAPPING",[_o]:"CUSTOM_TONE_MAPPING"};function Gd(t,n,e,i,a,r){const o=new Kt(n,e,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let s=null,c=null;const A=new An;A.setAttribute("position",new Wa([-1,3,0,-1,-1,0,3,-1,0],3)),A.setAttribute("uv",new Wa([0,2,0,0,2,0],2));const h=new yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new He(A,h),d=new Ca(-1,1,1,-1,0,1);let m=null,b=null,M=!1,u,l=null,C=[],B=!1;this.setSize=function(_,I){o.setSize(_,I),s!==null&&s.setSize(_,I),c!==null&&c.setSize(_,I);for(let v=0;v<C.length;v++){const T=C[v];T.setSize&&T.setSize(_,I)}},this.setEffects=function(_){C=_,B=C.length>0&&C[0].isRenderPass===!0;const I=o.width,v=o.height;C.length>0&&s===null&&(s=new Kt(I,v,{type:St,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(I,v,{type:St,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<C.length;T++){const E=C[T];E.setSize&&E.setSize(I,v)}},this.begin=function(_,I){if(M||_.toneMapping===nn&&C.length===0)return!1;if(l=I,I!==null){const v=I.width,T=I.height;(o.width!==v||o.height!==T)&&this.setSize(v,T)}return B===!1&&_.setRenderTarget(o),u=_.toneMapping,_.toneMapping=nn,!0},this.hasRenderPass=function(){return B},this.end=function(_,I){_.toneMapping=u,M=!0;let v=o,T=s;for(let E=0;E<C.length;E++){const x=C[E];x.enabled!==!1&&(x.render(_,T,v,I),x.needsSwap!==!1&&(v=T,T=T===s?c:s))}if(m!==_.outputColorSpace||b!==_.toneMapping){m=_.outputColorSpace,b=_.toneMapping,h.defines={},Ze.getTransfer(m)===at&&(h.defines.SRGB_TRANSFER="");const E=Qd[b];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,_.setRenderTarget(l),_.render(p,d),l=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),A.dispose(),h.dispose()}}const qo=new fa,pa=new gi(1,1),zo=new mo,Ko=new Mo,Xo=new po,Cr=[],vr=[],Sr=new Float32Array(16),xr=new Float32Array(9),Mr=new Float32Array(4);function On(t,n,e){const i=t[0];if(i<=0||i>0)return t;const a=n*e;let r=Cr[a];if(r===void 0&&(r=new Float32Array(a),Cr[a]=r),n!==0){i.toArray(r,0);for(let o=1,s=0;o!==n;++o)s+=e,t[o].toArray(r,s)}return r}function Et(t,n){if(t.length!==n.length)return!1;for(let e=0,i=t.length;e<i;e++)if(t[e]!==n[e])return!1;return!0}function _t(t,n){for(let e=0,i=n.length;e<i;e++)t[e]=n[e]}function Bi(t,n){let e=vr[n];e===void 0&&(e=new Int32Array(n),vr[n]=e);for(let i=0;i!==n;++i)e[i]=t.allocateTextureUnit();return e}function Od(t,n){const e=this.cache;e[0]!==n&&(t.uniform1f(this.addr,n),e[0]=n)}function kd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2f(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(Et(e,n))return;t.uniform2fv(this.addr,n),_t(e,n)}}function Hd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3f(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else if(n.r!==void 0)(e[0]!==n.r||e[1]!==n.g||e[2]!==n.b)&&(t.uniform3f(this.addr,n.r,n.g,n.b),e[0]=n.r,e[1]=n.g,e[2]=n.b);else{if(Et(e,n))return;t.uniform3fv(this.addr,n),_t(e,n)}}function Vd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4f(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(Et(e,n))return;t.uniform4fv(this.addr,n),_t(e,n)}}function Wd(t,n){const e=this.cache,i=n.elements;if(i===void 0){if(Et(e,n))return;t.uniformMatrix2fv(this.addr,!1,n),_t(e,n)}else{if(Et(e,i))return;Mr.set(i),t.uniformMatrix2fv(this.addr,!1,Mr),_t(e,i)}}function qd(t,n){const e=this.cache,i=n.elements;if(i===void 0){if(Et(e,n))return;t.uniformMatrix3fv(this.addr,!1,n),_t(e,n)}else{if(Et(e,i))return;xr.set(i),t.uniformMatrix3fv(this.addr,!1,xr),_t(e,i)}}function zd(t,n){const e=this.cache,i=n.elements;if(i===void 0){if(Et(e,n))return;t.uniformMatrix4fv(this.addr,!1,n),_t(e,n)}else{if(Et(e,i))return;Sr.set(i),t.uniformMatrix4fv(this.addr,!1,Sr),_t(e,i)}}function Kd(t,n){const e=this.cache;e[0]!==n&&(t.uniform1i(this.addr,n),e[0]=n)}function Xd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2i(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(Et(e,n))return;t.uniform2iv(this.addr,n),_t(e,n)}}function Jd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3i(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else{if(Et(e,n))return;t.uniform3iv(this.addr,n),_t(e,n)}}function jd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4i(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(Et(e,n))return;t.uniform4iv(this.addr,n),_t(e,n)}}function Yd(t,n){const e=this.cache;e[0]!==n&&(t.uniform1ui(this.addr,n),e[0]=n)}function Zd(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2ui(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(Et(e,n))return;t.uniform2uiv(this.addr,n),_t(e,n)}}function $d(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3ui(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else{if(Et(e,n))return;t.uniform3uiv(this.addr,n),_t(e,n)}}function eu(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4ui(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(Et(e,n))return;t.uniform4uiv(this.addr,n),_t(e,n)}}function tu(t,n,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(pa.compareFunction=e.isReversedDepthBuffer()?ba:Ia,r=pa):r=qo,e.setTexture2D(n||r,a)}function nu(t,n,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(n||Ko,a)}function iu(t,n,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(n||Xo,a)}function au(t,n,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(n||zo,a)}function ru(t){switch(t){case 5126:return Od;case 35664:return kd;case 35665:return Hd;case 35666:return Vd;case 35674:return Wd;case 35675:return qd;case 35676:return zd;case 5124:case 35670:return Kd;case 35667:case 35671:return Xd;case 35668:case 35672:return Jd;case 35669:case 35673:return jd;case 5125:return Yd;case 36294:return Zd;case 36295:return $d;case 36296:return eu;case 35678:case 36198:case 36298:case 36306:case 35682:return tu;case 35679:case 36299:case 36307:return nu;case 35680:case 36300:case 36308:case 36293:return iu;case 36289:case 36303:case 36311:case 36292:return au}}function ou(t,n){t.uniform1fv(this.addr,n)}function su(t,n){const e=On(n,this.size,2);t.uniform2fv(this.addr,e)}function cu(t,n){const e=On(n,this.size,3);t.uniform3fv(this.addr,e)}function Au(t,n){const e=On(n,this.size,4);t.uniform4fv(this.addr,e)}function lu(t,n){const e=On(n,this.size,4);t.uniformMatrix2fv(this.addr,!1,e)}function fu(t,n){const e=On(n,this.size,9);t.uniformMatrix3fv(this.addr,!1,e)}function du(t,n){const e=On(n,this.size,16);t.uniformMatrix4fv(this.addr,!1,e)}function uu(t,n){t.uniform1iv(this.addr,n)}function pu(t,n){t.uniform2iv(this.addr,n)}function hu(t,n){t.uniform3iv(this.addr,n)}function gu(t,n){t.uniform4iv(this.addr,n)}function mu(t,n){t.uniform1uiv(this.addr,n)}function Eu(t,n){t.uniform2uiv(this.addr,n)}function _u(t,n){t.uniform3uiv(this.addr,n)}function bu(t,n){t.uniform4uiv(this.addr,n)}function Iu(t,n,e){const i=this.cache,a=n.length,r=Bi(e,a);Et(i,r)||(t.uniform1iv(this.addr,r),_t(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=pa:o=qo;for(let s=0;s!==a;++s)e.setTexture2D(n[s]||o,r[s])}function Cu(t,n,e){const i=this.cache,a=n.length,r=Bi(e,a);Et(i,r)||(t.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==a;++o)e.setTexture3D(n[o]||Ko,r[o])}function vu(t,n,e){const i=this.cache,a=n.length,r=Bi(e,a);Et(i,r)||(t.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==a;++o)e.setTextureCube(n[o]||Xo,r[o])}function Su(t,n,e){const i=this.cache,a=n.length,r=Bi(e,a);Et(i,r)||(t.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==a;++o)e.setTexture2DArray(n[o]||zo,r[o])}function xu(t){switch(t){case 5126:return ou;case 35664:return su;case 35665:return cu;case 35666:return Au;case 35674:return lu;case 35675:return fu;case 35676:return du;case 5124:case 35670:return uu;case 35667:case 35671:return pu;case 35668:case 35672:return hu;case 35669:case 35673:return gu;case 5125:return mu;case 36294:return Eu;case 36295:return _u;case 36296:return bu;case 35678:case 36198:case 36298:case 36306:case 35682:return Iu;case 35679:case 36299:case 36307:return Cu;case 35680:case 36300:case 36308:case 36293:return vu;case 36289:case 36303:case 36311:case 36292:return Su}}class Mu{constructor(n,e,i){this.id=n,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ru(e.type)}}class Bu{constructor(n,e,i){this.id=n,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xu(e.type)}}class Tu{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,e,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(n,e[s.id],i)}}}const Oi=/(\w+)(\])?(\[|\.)?/g;function Br(t,n){t.seq.push(n),t.map[n.id]=n}function Ru(t,n,e){const i=t.name,a=i.length;for(Oi.lastIndex=0;;){const r=Oi.exec(i),o=Oi.lastIndex;let s=r[1];const c=r[2]==="]",A=r[3];if(c&&(s=s|0),A===void 0||A==="["&&o+2===a){Br(e,A===void 0?new Mu(s,t,n):new Bu(s,t,n));break}else{let p=e.map[s];p===void 0&&(p=new Tu(s),Br(e,p)),e=p}}}class pi{constructor(n,e){this.seq=[],this.map={};const i=n.getProgramParameter(e,n.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=n.getActiveUniform(e,o),c=n.getUniformLocation(e,s.name);Ru(s,c,this)}const a=[],r=[];for(const o of this.seq)o.type===n.SAMPLER_2D_SHADOW||o.type===n.SAMPLER_CUBE_SHADOW||o.type===n.SAMPLER_2D_ARRAY_SHADOW?a.push(o):r.push(o);a.length>0&&(this.seq=a.concat(r))}setValue(n,e,i,a){const r=this.map[e];r!==void 0&&r.setValue(n,i,a)}setOptional(n,e,i){const a=e[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,e,i,a){for(let r=0,o=e.length;r!==o;++r){const s=e[r],c=i[s.id];c.needsUpdate!==!1&&s.setValue(n,c.value,a)}}static seqWithValue(n,e){const i=[];for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.id in e&&i.push(o)}return i}}function Tr(t,n,e){const i=t.createShader(n);return t.shaderSource(i,e),t.compileShader(i),i}const wu=37297;let Du=0;function Lu(t,n){const e=t.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,e.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===n?">":" "} ${s}: ${e[o]}`)}return i.join(`
`)}const Rr=new Ge;function yu(t){Ze._getMatrix(Rr,Ze.workingColorSpace,t);const n=`mat3( ${Rr.elements.map(e=>e.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Eo:return[n,"LinearTransferOETF"];case at:return[n,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[n,"LinearTransferOETF"]}}function wr(t,n,e){const i=t.getShaderParameter(n,t.COMPILE_STATUS),r=(t.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Lu(t.getShaderSource(n),s)}else return r}function Uu(t,n){const e=yu(n);return[`vec4 ${t}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Pu={[xo]:"Linear",[So]:"Reinhard",[vo]:"Cineon",[Co]:"ACESFilmic",[Io]:"AgX",[bo]:"Neutral",[_o]:"Custom"};function Fu(t,n){const e=Pu[n];return e===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ci=new he;function Nu(){Ze.getLuminanceCoefficients(ci);const t=ci.x.toFixed(4),n=ci.y.toFixed(4),e=ci.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${n}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qu(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xn).join(`
`)}function Gu(t){const n=[];for(const e in t){const i=t[e];i!==!1&&n.push("#define "+e+" "+i)}return n.join(`
`)}function Ou(t,n){const e={},i=t.getProgramParameter(n,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(n,a),o=r.name;let s=1;r.type===t.FLOAT_MAT2&&(s=2),r.type===t.FLOAT_MAT3&&(s=3),r.type===t.FLOAT_MAT4&&(s=4),e[o]={type:r.type,location:t.getAttribLocation(n,o),locationSize:s}}return e}function Xn(t){return t!==""}function Dr(t,n){const e=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Lr(t,n){return t.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const ku=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(t){return t.replace(ku,Vu)}const Hu=new Map;function Vu(t,n){let e=De[n];if(e===void 0){const i=Hu.get(n);if(i!==void 0)e=De[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return ha(e)}const Wu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yr(t){return t.replace(Wu,qu)}function qu(t,n,e,i){let a="";for(let r=parseInt(n);r<parseInt(e);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ur(t){let n=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?n+=`
#define HIGH_PRECISION`:t.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const zu={[di]:"SHADOWMAP_TYPE_PCF",[Kn]:"SHADOWMAP_TYPE_VSM"};function Ku(t){return zu[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xu={[ii]:"ENVMAP_TYPE_CUBE",[Gn]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE_UV"};function Ju(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Xu[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ju={[Gn]:"ENVMAP_MODE_REFRACTION"};function Yu(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ju[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zu={[sA]:"ENVMAP_BLENDING_MULTIPLY",[oA]:"ENVMAP_BLENDING_MIX",[rA]:"ENVMAP_BLENDING_ADD"};function $u(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Zu[t.combine]||"ENVMAP_BLENDING_NONE"}function ep(t){const n=t.envMapCubeUVHeight;if(n===null)return null;const e=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function tp(t,n,e,i){const a=t.getContext(),r=e.defines;let o=e.vertexShader,s=e.fragmentShader;const c=Ku(e),A=Ju(e),h=Yu(e),p=$u(e),d=ep(e),m=Qu(e),b=Gu(r),M=a.createProgram();let u,l,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Xn).join(`
`),u.length>0&&(u+=`
`),l=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Xn).join(`
`),l.length>0&&(l+=`
`)):(u=[Ur(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xn).join(`
`),l=[Ur(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+A:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?De.tonemapping_pars_fragment:"",e.toneMapping!==nn?Fu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Uu("linearToOutputTexel",e.outputColorSpace),Nu(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xn).join(`
`)),o=ha(o),o=Dr(o,e),o=Lr(o,e),s=ha(s),s=Dr(s,e),s=Lr(s,e),o=yr(o),s=yr(s),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,l=["#define varying in",e.glslVersion===lr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const B=C+u+o,_=C+l+s,I=Tr(a,a.VERTEX_SHADER,B),v=Tr(a,a.FRAGMENT_SHADER,_);a.attachShader(M,I),a.attachShader(M,v),e.index0AttributeName!==void 0?a.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function T(N){if(t.debug.checkShaderErrors){const O=a.getProgramInfoLog(M)||"",q=a.getShaderInfoLog(I)||"",y=a.getShaderInfoLog(v)||"",V=O.trim(),K=q.trim(),X=y.trim();let te=!0,j=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,M,I,v);else{const ee=wr(a,I,"vertex"),Y=wr(a,v,"fragment");ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+ee+`
`+Y)}else V!==""?Ke("WebGLProgram: Program Info Log:",V):(K===""||X==="")&&(j=!1);j&&(N.diagnostics={runnable:te,programLog:V,vertexShader:{log:K,prefix:u},fragmentShader:{log:X,prefix:l}})}a.deleteShader(I),a.deleteShader(v),E=new pi(a,M),x=Ou(a,M)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(M,wu)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Du++,this.cacheKey=n,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=v,this}let np=0;class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,e,i){const a=this._getShaderCacheForMaterial(n);return a.has(e)===!1&&(a.add(e),e.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(n){const e=this.materialCache.get(n);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const e=this.materialCache;let i=e.get(n);return i===void 0&&(i=new Set,e.set(n,i)),i}_getShaderStage(n){const e=this.shaderCache;let i=e.get(n);return i===void 0&&(i=new ap(n),e.set(n,i)),i}}class ap{constructor(n){this.id=np++,this.code=n,this.usedTimes=0}}function rp(t){return t===zt||t===Ii||t===Ci}function op(t,n,e,i,a,r){const o=new tA,s=new ip,c=new Set,A=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function M(E,x,L,N,O,q){const y=N.fog,V=O.geometry,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,te=n.get(E.envMap||K,X),j=te&&te.mapping===xi?te.image.height:null,ee=m[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&Ke("WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Y=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=Y!==void 0?Y.length:0;let be=0;V.morphAttributes.position!==void 0&&(be=1),V.morphAttributes.normal!==void 0&&(be=2),V.morphAttributes.color!==void 0&&(be=3);let $e,Xe,Je,W;if(ee){const tt=$t[ee];$e=tt.vertexShader,Xe=tt.fragmentShader}else{$e=E.vertexShader,Xe=E.fragmentShader;const tt=s.getVertexShaderStage(E),Ve=s.getFragmentShaderStage(E);s.update(E,tt,Ve),Je=tt.id,W=Ve.id}const Z=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Qe=!!E.map,mt=!!E.matcap,Ue=!!te,ke=!!E.aoMap,et=!!E.lightMap,Ne=!!E.bumpMap&&E.wireframe===!1,st=!!E.normalMap,bt=!!E.displacementMap,wt=!!E.emissiveMap,At=!!E.metalnessMap,dt=!!E.roughnessMap,D=E.anisotropy>0,Ct=E.clearcoat>0,ze=E.dispersion>0,S=E.retroreflectivity>0,f=E.iridescence>0,U=E.sheen>0,Q=E.transmission>0,k=D&&!!E.anisotropyMap,ne=Ct&&!!E.clearcoatMap,ie=Ct&&!!E.clearcoatNormalMap,H=Ct&&!!E.clearcoatRoughnessMap,J=f&&!!E.iridescenceMap,ae=f&&!!E.iridescenceThicknessMap,Se=U&&!!E.sheenColorMap,ce=U&&!!E.sheenRoughnessMap,re=!!E.specularMap,xe=!!E.specularColorMap,Be=!!E.specularIntensityMap,Re=Q&&!!E.transmissionMap,w=Q&&!!E.thicknessMap,oe=!!E.gradientMap,z=!!E.alphaMap,se=E.alphaTest>0,de=!!E.alphaHash,$=!!E.extensions;let Me=nn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Me=t.toneMapping);const Ie={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:Xe,defines:E.defines,customVertexShaderID:Je,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:mt,envMap:Ue,envMapMode:Ue&&te.mapping,envMapCubeUVHeight:j,aoMap:ke,lightMap:et,bumpMap:Ne,normalMap:st,displacementMap:bt,emissiveMap:wt,normalMapObjectSpace:st&&E.normalMapType===jc,normalMapTangentSpace:st&&E.normalMapType===Xa,packedNormalMap:st&&E.normalMapType===Xa&&rp(E.normalMap.format),metalnessMap:At,roughnessMap:dt,anisotropy:D,anisotropyMap:k,clearcoat:Ct,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:H,dispersion:ze,retroreflection:S,iridescence:f,iridescenceMap:J,iridescenceThicknessMap:ae,sheen:U,sheenColorMap:Se,sheenRoughnessMap:ce,specularMap:re,specularColorMap:xe,specularIntensityMap:Be,transmission:Q,transmissionMap:Re,thicknessMap:w,gradientMap:oe,opaque:E.transparent===!1&&E.blending===ui&&E.alphaToCoverage===!1,alphaMap:z,alphaTest:se,alphaHash:de,combine:E.combine,mapUv:Qe&&b(E.map.channel),aoMapUv:ke&&b(E.aoMap.channel),lightMapUv:et&&b(E.lightMap.channel),bumpMapUv:Ne&&b(E.bumpMap.channel),normalMapUv:st&&b(E.normalMap.channel),displacementMapUv:bt&&b(E.displacementMap.channel),emissiveMapUv:wt&&b(E.emissiveMap.channel),metalnessMapUv:At&&b(E.metalnessMap.channel),roughnessMapUv:dt&&b(E.roughnessMap.channel),anisotropyMapUv:k&&b(E.anisotropyMap.channel),clearcoatMapUv:ne&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:ce&&b(E.sheenRoughnessMap.channel),specularMapUv:re&&b(E.specularMap.channel),specularColorMapUv:xe&&b(E.specularColorMap.channel),specularIntensityMapUv:Be&&b(E.specularIntensityMap.channel),transmissionMapUv:Re&&b(E.transmissionMap.channel),thicknessMapUv:w&&b(E.thicknessMap.channel),alphaMapUv:z&&b(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(st||D),vertexNormals:!!V.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Qe||z),fog:!!y,useFog:E.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||V.attributes.normal===void 0&&st===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:be,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:wt&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===kt,flipSided:E.side===Rt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&E.extensions.multiDraw===!0||me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function u(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)x.push(L),x.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(l(x,E),C(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function l(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numSunLights),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numSunLightShadows),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function C(E,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.retroreflection&&o.enable(24),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),x.packedNormalMap&&o.enable(22),x.vertexNormals&&o.enable(23),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),x.numLightProbeGrids>0&&o.enable(22),x.hasPositionAttribute&&o.enable(23),E.push(o.mask)}function B(E){const x=m[E.type];let L;if(x){const N=$t[x];L=Jc.clone(N.uniforms)}else L=E.uniforms;return L}function _(E,x){let L=h.get(x);return L!==void 0?++L.usedTimes:(L=new tp(t,x,E,a),A.push(L),h.set(x,L)),L}function I(E){if(--E.usedTimes===0){const x=A.indexOf(E);A[x]=A[A.length-1],A.pop(),h.delete(E.cacheKey),E.destroy()}}function v(E){s.remove(E)}function T(){s.dispose()}return{getParameters:M,getProgramCacheKey:u,getUniforms:B,acquireProgram:_,releaseProgram:I,releaseShaderCache:v,programs:A,dispose:T}}function sp(){let t=new WeakMap;function n(o){return t.has(o)}function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function a(o,s,c){t.get(o)[s]=c}function r(){t=new WeakMap}return{has:n,get:e,remove:i,update:a,dispose:r}}function cp(t,n){return t.groupOrder!==n.groupOrder?t.groupOrder-n.groupOrder:t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.material.id!==n.material.id?t.material.id-n.material.id:t.materialVariant!==n.materialVariant?t.materialVariant-n.materialVariant:t.z!==n.z?t.z-n.z:t.id-n.id}function Pr(t,n){return t.groupOrder!==n.groupOrder?t.groupOrder-n.groupOrder:t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.z!==n.z?n.z-t.z:t.id-n.id}function Fr(){const t=[];let n=0;const e=[],i=[],a=[];function r(){n=0,e.length=0,i.length=0,a.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function s(d,m,b,M,u,l){let C=t[n];return C===void 0?(C={id:d.id,object:d,geometry:m,material:b,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:u,group:l},t[n]=C):(C.id=d.id,C.object=d,C.geometry=m,C.material=b,C.materialVariant=o(d),C.groupOrder=M,C.renderOrder=d.renderOrder,C.z=u,C.group=l),n++,C}function c(d,m,b,M,u,l,C){C.reversedDepth===!0&&(u=-u);const B=s(d,m,b,M,u,l);b.transmission>0?i.push(B):b.transparent===!0?a.push(B):e.push(B)}function A(d,m,b,M,u,l){const C=s(d,m,b,M,u,l);b.transmission>0?i.unshift(C):b.transparent===!0?a.unshift(C):e.unshift(C)}function h(d,m){e.length>1&&e.sort(d||cp),i.length>1&&i.sort(m||Pr),a.length>1&&a.sort(m||Pr)}function p(){for(let d=n,m=t.length;d<m;d++){const b=t[d];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:i,transparent:a,init:r,push:c,unshift:A,finish:p,sort:h}}function Ap(){let t=new WeakMap;function n(i,a){const r=t.get(i);let o;return r===void 0?(o=new Fr,t.set(i,[o])):a>=r.length?(o=new Fr,r.push(o)):o=r[a],o}function e(){t=new WeakMap}return{get:n,dispose:e}}function lp(){const t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let e;switch(n.type){case"SunLight":case"DirectionalLight":e={direction:new he,color:new Fe};break;case"SpotLight":e={position:new he,direction:new he,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new he,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new he,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":e={color:new Fe,position:new he,halfWidth:new he,halfHeight:new he};break}return t[n.id]=e,e}}}function fp(){const t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let e;switch(n.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[n.id]=e,e}}}let dp=0;function up(t,n){return(n.castShadow?2:0)-(t.castShadow?2:0)+(n.map?1:0)-(t.map?1:0)}function pp(t){const n=new lp,e=fp(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)i.probe.push(new he);const a=new he,r=new Xt,o=new Xt;function s(A){let h=0,p=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,b=0,M=0,u=0,l=0,C=0,B=0,_=0,I=0,v=0,T=0,E=0,x=0,L=0;A.sort(up);for(let O=0,q=A.length;O<q;O++){const y=A[O],V=y.color,K=y.intensity,X=y.distance;let te=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===zt?te=y.shadow.map.texture:te=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)h+=V.r*K,p+=V.g*K,d+=V.b*K;else if(y.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(y.sh.coefficients[j],K);L++}else if(y.isSunLight){const j=n.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const ee=y.shadow,Y=e.get(y);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[b]=Y,i.sunShadowMap[b]=te;const ge=ee.getViewportCount();for(let be=0;be<ge;be++)i.sunShadowMatrix[M+be]=ee.getMatrix(be),i.sunShadowCascade[M+be]=ee._cascadeData[be];M+=ge,b++}i.sun[m]=j,m++}else if(y.isDirectionalLight){const j=n.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const ee=y.shadow,Y=e.get(y);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=te,i.directionalShadowMatrix[u]=y.shadow.matrix,I++}i.directional[u]=j,u++}else if(y.isSpotLight){const j=n.get(y);j.position.setFromMatrixPosition(y.matrixWorld),j.color.copy(V).multiplyScalar(K),j.distance=X,j.coneCos=Math.cos(y.angle),j.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),j.decay=y.decay,i.spot[C]=j;const ee=y.shadow;if(y.map&&(i.spotLightMap[E]=y.map,E++,ee.updateMatrices(y),y.castShadow&&x++),i.spotLightMatrix[C]=ee.matrix,y.castShadow){const Y=e.get(y);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.spotShadow[C]=Y,i.spotShadowMap[C]=te,T++}C++}else if(y.isRectAreaLight){const j=n.get(y);j.color.copy(V).multiplyScalar(K),j.halfWidth.set(y.width*.5,0,0),j.halfHeight.set(0,y.height*.5,0),i.rectArea[B]=j,B++}else if(y.isPointLight){const j=n.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),j.distance=y.distance,j.decay=y.decay,y.castShadow){const ee=y.shadow,Y=e.get(y);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,i.pointShadow[l]=Y,i.pointShadowMap[l]=te,i.pointShadowMatrix[l]=y.shadow.matrix,v++}i.point[l]=j,l++}else if(y.isHemisphereLight){const j=n.get(y);j.skyColor.copy(y.color).multiplyScalar(K),j.groundColor.copy(y.groundColor).multiplyScalar(K),i.hemi[_]=j,_++}}B>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const N=i.hash;(N.sunLength!==m||N.directionalLength!==u||N.pointLength!==l||N.spotLength!==C||N.rectAreaLength!==B||N.hemiLength!==_||N.numSunShadows!==b||N.numDirectionalShadows!==I||N.numPointShadows!==v||N.numSpotShadows!==T||N.numSpotMaps!==E||N.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=u,i.spot.length=C,i.rectArea.length=B,i.point.length=l,i.hemi.length=_,i.sunShadow.length=b,i.sunShadowMap.length=b,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+E-x,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=L,N.sunLength=m,N.directionalLength=u,N.pointLength=l,N.spotLength=C,N.rectAreaLength=B,N.hemiLength=_,N.numSunShadows=b,N.numDirectionalShadows=I,N.numPointShadows=v,N.numSpotShadows=T,N.numSpotMaps=E,N.numLightProbes=L,i.version=dp++)}function c(A,h){let p=0,d=0,m=0,b=0,M=0,u=0;const l=h.matrixWorldInverse;for(let C=0,B=A.length;C<B;C++){const _=A[C];if(_.isSunLight){const I=i.sun[p];I.direction.setFromMatrixPosition(_.matrixWorld),I.direction.transformDirection(l),p++}else if(_.isDirectionalLight){const I=i.directional[d];I.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(l),d++}else if(_.isSpotLight){const I=i.spot[b];I.position.setFromMatrixPosition(_.matrixWorld),I.position.applyMatrix4(l),I.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(l),b++}else if(_.isRectAreaLight){const I=i.rectArea[M];I.position.setFromMatrixPosition(_.matrixWorld),I.position.applyMatrix4(l),o.identity(),r.copy(_.matrixWorld),r.premultiply(l),o.extractRotation(r),I.halfWidth.set(_.width*.5,0,0),I.halfHeight.set(0,_.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){const I=i.point[m];I.position.setFromMatrixPosition(_.matrixWorld),I.position.applyMatrix4(l),m++}else if(_.isHemisphereLight){const I=i.hemi[u];I.direction.setFromMatrixPosition(_.matrixWorld),I.direction.transformDirection(l),u++}}}return{setup:s,setupView:c,state:i}}function Nr(t){const n=new pp(t),e=[],i=[],a=[];function r(d){p.camera=d,e.length=0,i.length=0,a.length=0}function o(d){e.push(d)}function s(d){i.push(d)}function c(d){a.push(d)}function A(){n.setup(e)}function h(d){n.setupView(e,d)}const p={lightsArray:e,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:A,setupLightsView:h,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function hp(t){let n=new WeakMap;function e(a,r=0){const o=n.get(a);let s;return o===void 0?(s=new Nr(t),n.set(a,[s])):r>=o.length?(s=new Nr(t),o.push(s)):s=o[r],s}function i(){n=new WeakMap}return{get:e,dispose:i}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ep=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],_p=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],Qr=new Xt,Vn=new he,ki=new he;function bp(t,n,e){let i=new ao;const a=new Mt,r=new Mt,o=new Lt,s=new Rc,c=new wc,A={},h=e.maxTextureSize,p={[Fn]:Rt,[Rt]:Fn,[kt]:kt},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:gp,fragmentShader:mp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const b=new An;b.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new He(b,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=di;let l=this.type;this.render=function(v,T,E){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||v.length===0)return;this.type===Dc&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=di);const x=t.getRenderTarget(),L=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(sn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=l!==this.type;q&&T.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(V=>V.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,V=v.length;y<V;y++){const K=v[y],X=K.shadow;if(X===void 0){Ke("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const te=X.getFrameExtents();a.multiply(te),r.copy(X.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/te.x),a.x=r.x*te.x,X.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/te.y),a.y=r.y*te.y,X.mapSize.y=r.y));const j=t.state.buffers.depth.getReversed();if(X.camera._reversedDepth=j,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Kn){if(K.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Kt(a.x,a.y,{format:zt,type:St,minFilter:gt,magFilter:gt,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new gi(a.x,a.y,yt),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=Nn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt}else K.isPointLight?(X.map=new Wo(a.x),X.map.depthTexture=new Lc(a.x,vn)):(X.map=new Kt(a.x,a.y),X.map.depthTexture=new gi(a.x,a.y,vn)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=Nn,this.type===di?(X.map.depthTexture.compareFunction=j?ba:Ia,X.map.depthTexture.minFilter=gt,X.map.depthTexture.magFilter=gt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);const ee=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,E);for(let Y=0;Y<ee;Y++){const ge=X.getCamera(Y);if(K.isPointLight){const be=X.camera,$e=X.matrix,Xe=K.distance||be.far;Xe!==be.far&&(be.far=Xe,be.updateProjectionMatrix()),Vn.setFromMatrixPosition(K.matrixWorld),be.position.copy(Vn),ki.copy(be.position),ki.add(Ep[Y]),be.up.copy(_p[Y]),be.lookAt(ki),be.updateMatrixWorld(),$e.makeTranslation(-Vn.x,-Vn.y,-Vn.z),Qr.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Qr,be.coordinateSystem,be.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)t.setRenderTarget(X.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(X.map),t.clear());const be=X.getViewport(Y);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),O.viewport(o)}i=X.getFrustum(Y),_(T,E,ge,K,this.type)}X.isPointLightShadow!==!0&&this.type===Kn&&C(X,E),X.needsUpdate=!1}l=this.type,u.needsUpdate=!1,t.setRenderTarget(x,L,N)};function C(v,T){const E=n.update(M);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null?v.mapPass=new Kt(a.x,a.y,{format:zt,type:St}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,t.setRenderTarget(v.mapPass),t.clear(),t.renderBufferDirect(T,null,E,d,M,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value.set(v.map.width,v.map.height),m.uniforms.radius.value=v.radius,t.setRenderTarget(v.map),t.clear(),t.renderBufferDirect(T,null,E,m,M,null)}function B(v,T,E,x){let L=null;const N=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)L=N;else if(L=E.isPointLight===!0?c:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=L.uuid,q=T.uuid;let y=A[O];y===void 0&&(y={},A[O]=y);let V=y[q];V===void 0&&(V=L.clone(),y[q]=V,T.addEventListener("dispose",I)),L=V}if(L.visible=T.visible,L.wireframe=T.wireframe,x===Kn?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:p[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=t.properties.get(L);O.light=E}return L}function _(v,T,E,x,L){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&L===Kn)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const q=n.update(v),y=v.material;if(Array.isArray(y)){const V=q.groups;for(let K=0,X=V.length;K<X;K++){const te=V[K],j=y[te.materialIndex];if(j&&j.visible){const ee=B(v,j,x,L);v.onBeforeShadow(t,v,T,E,q,ee,te),t.renderBufferDirect(E,null,q,ee,v,te),v.onAfterShadow(t,v,T,E,q,ee,te)}}}else if(y.visible){const V=B(v,y,x,L);v.onBeforeShadow(t,v,T,E,q,V,null),t.renderBufferDirect(E,null,q,V,v,null),v.onAfterShadow(t,v,T,E,q,V,null)}}const O=v.children;for(let q=0,y=O.length;q<y;q++)_(O[q],T,E,x,L)}function I(v){v.target.removeEventListener("dispose",I);for(const E in A){const x=A[E],L=v.target.uuid;L in x&&(x[L].dispose(),delete x[L])}}}function Ip(t,n){function e(){let w=!1;const oe=new Lt;let z=null;const se=new Lt(0,0,0,0);return{setMask:function(de){z!==de&&!w&&(t.colorMask(de,de,de,de),z=de)},setLocked:function(de){w=de},setClear:function(de,$,Me,Ie,tt){tt===!0&&(de*=Ie,$*=Ie,Me*=Ie),oe.set(de,$,Me,Ie),se.equals(oe)===!1&&(t.clearColor(de,$,Me,Ie),se.copy(oe))},reset:function(){w=!1,z=null,se.set(-1,0,0,0)}}}function i(){let w=!1,oe=!1,z=null,se=null,de=null;return{setReversed:function($){if(oe!==$){const Me=n.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),oe=$;const Ie=de;de=null,this.setClear(Ie)}},getReversed:function(){return oe},setTest:function($){$?Z(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function($){z!==$&&!w&&(t.depthMask($),z=$)},setFunc:function($){if(oe&&($=cA[$]),se!==$){switch($){case qc:t.depthFunc(t.NEVER);break;case Wc:t.depthFunc(t.ALWAYS);break;case Vc:t.depthFunc(t.LESS);break;case Va:t.depthFunc(t.LEQUAL);break;case Hc:t.depthFunc(t.EQUAL);break;case kc:t.depthFunc(t.GEQUAL);break;case Oc:t.depthFunc(t.GREATER);break;case Gc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=$}},setLocked:function($){w=$},setClear:function($){de!==$&&(de=$,oe&&($=1-$),t.clearDepth($))},reset:function(){w=!1,z=null,se=null,de=null,oe=!1}}}function a(){let w=!1,oe=null,z=null,se=null,de=null,$=null,Me=null,Ie=null,tt=null;return{setTest:function(Ve){w||(Ve?Z(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(Ve){oe!==Ve&&!w&&(t.stencilMask(Ve),oe=Ve)},setFunc:function(Ve,Wt,Jt){(z!==Ve||se!==Wt||de!==Jt)&&(t.stencilFunc(Ve,Wt,Jt),z=Ve,se=Wt,de=Jt)},setOp:function(Ve,Wt,Jt){($!==Ve||Me!==Wt||Ie!==Jt)&&(t.stencilOp(Ve,Wt,Jt),$=Ve,Me=Wt,Ie=Jt)},setLocked:function(Ve){w=Ve},setClear:function(Ve){tt!==Ve&&(t.clearStencil(Ve),tt=Ve)},reset:function(){w=!1,oe=null,z=null,se=null,de=null,$=null,Me=null,Ie=null,tt=null}}}const r=new e,o=new i,s=new a,c=new WeakMap,A=new WeakMap;let h={},p={},d={},m=new WeakMap,b=[],M=null,u=!1,l=null,C=null,B=null,_=null,I=null,v=null,T=null,E=new Fe(0,0,0),x=0,L=!1,N=null,O=null,q=null,y=null,V=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,te=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=te>=2);let ee=null,Y={};const ge=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),$e=new Lt().fromArray(ge),Xe=new Lt().fromArray(be);function Je(w,oe,z,se){const de=new Uint8Array(4),$=t.createTexture();t.bindTexture(w,$),t.texParameteri(w,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(w,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<z;Me++)w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(oe+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return $}const W={};W[t.TEXTURE_2D]=Je(t.TEXTURE_2D,t.TEXTURE_2D,1),W[t.TEXTURE_CUBE_MAP]=Je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[t.TEXTURE_2D_ARRAY]=Je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),W[t.TEXTURE_3D]=Je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),Z(t.DEPTH_TEST),o.setFunc(Va),Ne(!1),st(qa),Z(t.CULL_FACE),ke(sn);function Z(w){h[w]!==!0&&(t.enable(w),h[w]=!0)}function ve(w){h[w]!==!1&&(t.disable(w),h[w]=!1)}function Le(w,oe){return d[w]!==oe?(t.bindFramebuffer(w,oe),d[w]=oe,w===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=oe),w===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(w,oe){let z=b,se=!1;if(w){z=m.get(oe),z===void 0&&(z=[],m.set(oe,z));const de=w.textures;if(z.length!==de.length||z[0]!==t.COLOR_ATTACHMENT0){for(let $=0,Me=de.length;$<Me;$++)z[$]=t.COLOR_ATTACHMENT0+$;z.length=de.length,se=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,se=!0);se&&t.drawBuffers(z)}function Qe(w){return M!==w?(t.useProgram(w),M=w,!0):!1}const mt={[kn]:t.FUNC_ADD,[sc]:t.FUNC_SUBTRACT,[oc]:t.FUNC_REVERSE_SUBTRACT};mt[AA]=t.MIN,mt[lA]=t.MAX;const Ue={[Cc]:t.ZERO,[Ic]:t.ONE,[bc]:t.SRC_COLOR,[_c]:t.SRC_ALPHA,[Ec]:t.SRC_ALPHA_SATURATE,[mc]:t.DST_COLOR,[gc]:t.DST_ALPHA,[hc]:t.ONE_MINUS_SRC_COLOR,[pc]:t.ONE_MINUS_SRC_ALPHA,[uc]:t.ONE_MINUS_DST_COLOR,[dc]:t.ONE_MINUS_DST_ALPHA,[fc]:t.CONSTANT_COLOR,[lc]:t.ONE_MINUS_CONSTANT_COLOR,[Ac]:t.CONSTANT_ALPHA,[cc]:t.ONE_MINUS_CONSTANT_ALPHA};function ke(w,oe,z,se,de,$,Me,Ie,tt,Ve){if(w===sn){u===!0&&(ve(t.BLEND),u=!1);return}if(u===!1&&(Z(t.BLEND),u=!0),w!==Xc){if(w!==l||Ve!==L){if((C!==kn||I!==kn)&&(t.blendEquation(t.FUNC_ADD),C=kn,I=kn),Ve)switch(w){case ui:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tn:t.blendFunc(t.ONE,t.ONE);break;case Ka:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case za:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",w);break}else switch(w){case ui:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ka:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case za:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",w);break}B=null,_=null,v=null,T=null,E.set(0,0,0),x=0,l=w,L=Ve}return}de=de||oe,$=$||z,Me=Me||se,(oe!==C||de!==I)&&(t.blendEquationSeparate(mt[oe],mt[de]),C=oe,I=de),(z!==B||se!==_||$!==v||Me!==T)&&(t.blendFuncSeparate(Ue[z],Ue[se],Ue[$],Ue[Me]),B=z,_=se,v=$,T=Me),(Ie.equals(E)===!1||tt!==x)&&(t.blendColor(Ie.r,Ie.g,Ie.b,tt),E.copy(Ie),x=tt),l=w,L=!1}function et(w,oe){w.side===kt?ve(t.CULL_FACE):Z(t.CULL_FACE);let z=w.side===Rt;oe&&(z=!z),Ne(z),w.blending===ui&&w.transparent===!1?ke(sn):ke(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),o.setFunc(w.depthFunc),o.setTest(w.depthTest),o.setMask(w.depthWrite),r.setMask(w.colorWrite);const se=w.stencilWrite;s.setTest(se),se&&(s.setMask(w.stencilWriteMask),s.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),s.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),wt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(w){N!==w&&(w?t.frontFace(t.CW):t.frontFace(t.CCW),N=w)}function st(w){w!==zc?(Z(t.CULL_FACE),w!==O&&(w===qa?t.cullFace(t.BACK):w===Kc?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),O=w}function bt(w){w!==q&&(X&&t.lineWidth(w),q=w)}function wt(w,oe,z){w?(Z(t.POLYGON_OFFSET_FILL),(y!==oe||V!==z)&&(y=oe,V=z,o.getReversed()&&(oe=-oe),t.polygonOffset(oe,z))):ve(t.POLYGON_OFFSET_FILL)}function At(w){w?Z(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function dt(w){w===void 0&&(w=t.TEXTURE0+K-1),ee!==w&&(t.activeTexture(w),ee=w)}function D(w,oe,z){z===void 0&&(ee===null?z=t.TEXTURE0+K-1:z=ee);let se=Y[z];se===void 0&&(se={type:void 0,texture:void 0},Y[z]=se),(se.type!==w||se.texture!==oe)&&(ee!==z&&(t.activeTexture(z),ee=z),t.bindTexture(w,oe||W[w]),se.type=w,se.texture=oe)}function Ct(){const w=Y[ee];w!==void 0&&w.type!==void 0&&(t.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ze(){try{t.compressedTexImage2D(...arguments)}catch(w){ot("WebGLState:",w)}}function S(){try{t.compressedTexImage3D(...arguments)}catch(w){ot("WebGLState:",w)}}function f(){try{t.texSubImage2D(...arguments)}catch(w){ot("WebGLState:",w)}}function U(){try{t.texSubImage3D(...arguments)}catch(w){ot("WebGLState:",w)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(w){ot("WebGLState:",w)}}function k(){try{t.compressedTexSubImage3D(...arguments)}catch(w){ot("WebGLState:",w)}}function ne(){try{t.texStorage2D(...arguments)}catch(w){ot("WebGLState:",w)}}function ie(){try{t.texStorage3D(...arguments)}catch(w){ot("WebGLState:",w)}}function H(){try{t.texImage2D(...arguments)}catch(w){ot("WebGLState:",w)}}function J(){try{t.texImage3D(...arguments)}catch(w){ot("WebGLState:",w)}}function ae(w){return p[w]!==void 0?p[w]:t.getParameter(w)}function Se(w,oe){p[w]!==oe&&(t.pixelStorei(w,oe),p[w]=oe)}function ce(w){$e.equals(w)===!1&&(t.scissor(w.x,w.y,w.z,w.w),$e.copy(w))}function re(w){Xe.equals(w)===!1&&(t.viewport(w.x,w.y,w.z,w.w),Xe.copy(w))}function xe(w,oe){let z=A.get(oe);z===void 0&&(z=new WeakMap,A.set(oe,z));let se=z.get(w);se===void 0&&(se=t.getUniformBlockIndex(oe,w.name),z.set(w,se))}function Be(w,oe){const se=A.get(oe).get(w);c.get(oe)!==se&&(t.uniformBlockBinding(oe,se,w.__bindingPointIndex),c.set(oe,se))}function Re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},ee=null,Y={},d={},m=new WeakMap,b=[],M=null,u=!1,l=null,C=null,B=null,_=null,I=null,v=null,T=null,E=new Fe(0,0,0),x=0,L=!1,N=null,O=null,q=null,y=null,V=null,$e.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:Z,disable:ve,bindFramebuffer:Le,drawBuffers:me,useProgram:Qe,setBlending:ke,setMaterial:et,setFlipSided:Ne,setCullFace:st,setLineWidth:bt,setPolygonOffset:wt,setScissorTest:At,activeTexture:dt,bindTexture:D,unbindTexture:Ct,compressedTexImage2D:ze,compressedTexImage3D:S,texImage2D:H,texImage3D:J,pixelStorei:Se,getParameter:ae,updateUBOMapping:xe,uniformBlockBinding:Be,texStorage2D:ne,texStorage3D:ie,texSubImage2D:f,texSubImage3D:U,compressedTexSubImage2D:Q,compressedTexSubImage3D:k,scissor:ce,viewport:re,reset:Re}}function Cp(t,n,e,i,a,r,o){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new Mt,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,f){return b?new OffscreenCanvas(S,f):aA("canvas")}function u(S,f,U){let Q=1;const k=ze(S);if((k.width>U||k.height>U)&&(Q=U/Math.max(k.width,k.height)),Q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const ne=Math.floor(Q*k.width),ie=Math.floor(Q*k.height);d===void 0&&(d=M(ne,ie));const H=f?M(ne,ie):d;return H.width=ne,H.height=ie,H.getContext("2d").drawImage(S,0,0,ne,ie),Ke("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+ne+"x"+ie+")."),H}else return"data"in S&&Ke("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),S;return S}function l(S){return S.generateMipmaps}function C(S){t.generateMipmap(S)}function B(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(S,f,U,Q,k,ne=!1){if(S!==null){if(t[S]!==void 0)return t[S];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ie;Q&&(ie=n.get("EXT_texture_norm16"),ie||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=f;if(f===t.RED&&(U===t.FLOAT&&(H=t.R32F),U===t.HALF_FLOAT&&(H=t.R16F),U===t.UNSIGNED_BYTE&&(H=t.R8),U===t.UNSIGNED_SHORT&&ie&&(H=ie.R16_EXT),U===t.SHORT&&ie&&(H=ie.R16_SNORM_EXT)),f===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.R8UI),U===t.UNSIGNED_SHORT&&(H=t.R16UI),U===t.UNSIGNED_INT&&(H=t.R32UI),U===t.BYTE&&(H=t.R8I),U===t.SHORT&&(H=t.R16I),U===t.INT&&(H=t.R32I)),f===t.RG&&(U===t.FLOAT&&(H=t.RG32F),U===t.HALF_FLOAT&&(H=t.RG16F),U===t.UNSIGNED_BYTE&&(H=t.RG8),U===t.UNSIGNED_SHORT&&ie&&(H=ie.RG16_EXT),U===t.SHORT&&ie&&(H=ie.RG16_SNORM_EXT)),f===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.RG8UI),U===t.UNSIGNED_SHORT&&(H=t.RG16UI),U===t.UNSIGNED_INT&&(H=t.RG32UI),U===t.BYTE&&(H=t.RG8I),U===t.SHORT&&(H=t.RG16I),U===t.INT&&(H=t.RG32I)),f===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.RGB8UI),U===t.UNSIGNED_SHORT&&(H=t.RGB16UI),U===t.UNSIGNED_INT&&(H=t.RGB32UI),U===t.BYTE&&(H=t.RGB8I),U===t.SHORT&&(H=t.RGB16I),U===t.INT&&(H=t.RGB32I)),f===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),U===t.UNSIGNED_INT&&(H=t.RGBA32UI),U===t.BYTE&&(H=t.RGBA8I),U===t.SHORT&&(H=t.RGBA16I),U===t.INT&&(H=t.RGBA32I)),f===t.RGB&&(U===t.UNSIGNED_SHORT&&ie&&(H=ie.RGB16_EXT),U===t.SHORT&&ie&&(H=ie.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),f===t.RGBA){const J=ne?Eo:Ze.getTransfer(k);U===t.FLOAT&&(H=t.RGBA32F),U===t.HALF_FLOAT&&(H=t.RGBA16F),U===t.UNSIGNED_BYTE&&(H=J===at?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&ie&&(H=ie.RGBA16_EXT),U===t.SHORT&&ie&&(H=ie.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function I(S,f){let U;return S?f===null||f===vn||f===$n?U=t.DEPTH24_STENCIL8:f===yt?U=t.DEPTH32F_STENCIL8:f===Qn&&(U=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===vn||f===$n?U=t.DEPTH_COMPONENT24:f===yt?U=t.DEPTH_COMPONENT32F:f===Qn&&(U=t.DEPTH_COMPONENT16),U}function v(S,f){return l(S)===!0||S.isFramebufferTexture&&S.minFilter!==qt&&S.minFilter!==gt?Math.log2(Math.max(f.width,f.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?f.mipmaps.length:1}function T(S){const f=S.target;f.removeEventListener("dispose",T),x(f),f.isVideoTexture&&h.delete(f),f.isHTMLTexture&&p.delete(f)}function E(S){const f=S.target;f.removeEventListener("dispose",E),N(f)}function x(S){const f=i.get(S);if(f.__webglInit===void 0)return;const U=S.source,Q=m.get(U);if(Q){const k=Q[f.__cacheKey];k.usedTimes--,k.usedTimes===0&&L(S),Object.keys(Q).length===0&&m.delete(U)}i.remove(S)}function L(S){const f=i.get(S);t.deleteTexture(f.__webglTexture);const U=S.source,Q=m.get(U);delete Q[f.__cacheKey],o.memory.textures--}function N(S){const f=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(f.__webglFramebuffer[Q]))for(let k=0;k<f.__webglFramebuffer[Q].length;k++)t.deleteFramebuffer(f.__webglFramebuffer[Q][k]);else t.deleteFramebuffer(f.__webglFramebuffer[Q]);f.__webglDepthbuffer&&t.deleteRenderbuffer(f.__webglDepthbuffer[Q])}else{if(Array.isArray(f.__webglFramebuffer))for(let Q=0;Q<f.__webglFramebuffer.length;Q++)t.deleteFramebuffer(f.__webglFramebuffer[Q]);else t.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&t.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&t.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let Q=0;Q<f.__webglColorRenderbuffer.length;Q++)f.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(f.__webglColorRenderbuffer[Q]);f.__webglDepthRenderbuffer&&t.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const U=S.textures;for(let Q=0,k=U.length;Q<k;Q++){const ne=i.get(U[Q]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(U[Q])}i.remove(S)}let O=0;function q(){O=0}function y(){return O}function V(S){O=S}function K(){const S=O;return S>=a.maxTextures&&Ke("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,S}function X(S){const f=[];return f.push(S.wrapS),f.push(S.wrapT),f.push(S.wrapR||0),f.push(S.magFilter),f.push(S.minFilter),f.push(S.anisotropy),f.push(S.internalFormat),f.push(S.format),f.push(S.type),f.push(S.generateMipmaps),f.push(S.premultiplyAlpha),f.push(S.flipY),f.push(S.unpackAlignment),f.push(S.colorSpace),f.join()}function te(S,f){const U=i.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){const Q=S.image;if(Q===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,S,f);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+f)}function j(S,f){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){ve(U,S,f);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+f)}function ee(S,f){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){ve(U,S,f);return}e.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+f)}function Y(S,f){const U=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&U.__version!==S.version){Le(U,S,f);return}e.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+f)}const ge={[Zn]:t.REPEAT,[hi]:t.CLAMP_TO_EDGE,[ro]:t.MIRRORED_REPEAT},be={[qt]:t.NEAREST,[_a]:t.NEAREST_MIPMAP_NEAREST,[zn]:t.NEAREST_MIPMAP_LINEAR,[gt]:t.LINEAR,[fi]:t.LINEAR_MIPMAP_NEAREST,[en]:t.LINEAR_MIPMAP_LINEAR},$e={[Tc]:t.NEVER,[Bc]:t.ALWAYS,[Mc]:t.LESS,[Ia]:t.LEQUAL,[xc]:t.EQUAL,[ba]:t.GEQUAL,[Sc]:t.GREATER,[vc]:t.NOTEQUAL};function Xe(S,f){if(f.type===yt&&n.has("OES_texture_float_linear")===!1&&(f.magFilter===gt||f.magFilter===fi||f.magFilter===zn||f.magFilter===en||f.minFilter===gt||f.minFilter===fi||f.minFilter===zn||f.minFilter===en)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,ge[f.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ge[f.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ge[f.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,be[f.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,be[f.minFilter]),f.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,$e[f.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===qt||f.minFilter!==zn&&f.minFilter!==en||f.type===yt&&n.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||i.get(f).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");t.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,a.getMaxAnisotropy())),i.get(f).__currentAnisotropy=f.anisotropy}}}function Je(S,f){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,f.addEventListener("dispose",T));const Q=f.source;let k=m.get(Q);k===void 0&&(k={},m.set(Q,k));const ne=X(f);if(ne!==S.__cacheKey){k[ne]===void 0&&(k[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),k[ne].usedTimes++;const ie=k[S.__cacheKey];ie!==void 0&&(k[S.__cacheKey].usedTimes--,ie.usedTimes===0&&L(f)),S.__cacheKey=ne,S.__webglTexture=k[ne].texture}return U}function W(S,f,U){return Math.floor(Math.floor(S/U)/f)}function Z(S,f,U,Q){const ne=S.updateRanges;if(ne.length===0)e.texSubImage2D(t.TEXTURE_2D,0,0,0,f.width,f.height,U,Q,f.data);else{ne.sort((Se,ce)=>Se.start-ce.start);let ie=0;for(let Se=1;Se<ne.length;Se++){const ce=ne[ie],re=ne[Se],xe=ce.start+ce.count,Be=W(re.start,f.width,4),Re=W(ce.start,f.width,4);re.start<=xe+1&&Be===Re&&W(re.start+re.count-1,f.width,4)===Be?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++ie,ne[ie]=re)}ne.length=ie+1;const H=e.getParameter(t.UNPACK_ROW_LENGTH),J=e.getParameter(t.UNPACK_SKIP_PIXELS),ae=e.getParameter(t.UNPACK_SKIP_ROWS);e.pixelStorei(t.UNPACK_ROW_LENGTH,f.width);for(let Se=0,ce=ne.length;Se<ce;Se++){const re=ne[Se],xe=Math.floor(re.start/4),Be=Math.ceil(re.count/4),Re=xe%f.width,w=Math.floor(xe/f.width),oe=Be,z=1;e.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),e.pixelStorei(t.UNPACK_SKIP_ROWS,w),e.texSubImage2D(t.TEXTURE_2D,0,Re,w,oe,z,U,Q,f.data)}S.clearUpdateRanges(),e.pixelStorei(t.UNPACK_ROW_LENGTH,H),e.pixelStorei(t.UNPACK_SKIP_PIXELS,J),e.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function ve(S,f,U){let Q=t.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),f.isData3DTexture&&(Q=t.TEXTURE_3D);const k=Je(S,f),ne=f.source;e.bindTexture(Q,S.__webglTexture,t.TEXTURE0+U);const ie=i.get(ne);if(ne.version!==ie.__version||k===!0){if(e.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){const z=Ze.getPrimaries(Ze.workingColorSpace),se=f.colorSpace===pn?null:Ze.getPrimaries(f.colorSpace),de=f.colorSpace===pn||z===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;e.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}e.pixelStorei(t.UNPACK_ALIGNMENT,f.unpackAlignment);let J=u(f.image,!1,a.maxTextureSize);J=Ct(f,J);const ae=r.convert(f.format,f.colorSpace),Se=r.convert(f.type);let ce=_(f.internalFormat,ae,Se,f.normalized,f.colorSpace,f.isVideoTexture);Xe(Q,f);let re;const xe=f.mipmaps,Be=f.isVideoTexture!==!0,Re=ie.__version===void 0||k===!0,w=ne.dataReady,oe=v(f,J);if(f.isDepthTexture)ce=I(f.format===Bn,f.type),Re&&(Be?e.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):e.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,ae,Se,null));else if(f.isDataTexture)if(xe.length>0){Be&&Re&&e.texStorage2D(t.TEXTURE_2D,oe,ce,xe[0].width,xe[0].height);for(let z=0,se=xe.length;z<se;z++)re=xe[z],Be?w&&e.texSubImage2D(t.TEXTURE_2D,z,0,0,re.width,re.height,ae,Se,re.data):e.texImage2D(t.TEXTURE_2D,z,ce,re.width,re.height,0,ae,Se,re.data);f.generateMipmaps=!1}else Be?(Re&&e.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height),w&&Z(f,J,ae,Se)):e.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,ae,Se,J.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Be&&Re&&e.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,xe[0].width,xe[0].height,J.depth);for(let z=0,se=xe.length;z<se;z++)if(re=xe[z],f.format!==xt)if(ae!==null)if(Be){if(w)if(f.layerUpdates.size>0){const de=Ar(re.width,re.height,f.format,f.type);for(const $ of f.layerUpdates){const Me=re.data.subarray($*de/re.data.BYTES_PER_ELEMENT,($+1)*de/re.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,$,re.width,re.height,1,ae,Me)}}else e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,re.width,re.height,J.depth,ae,re.data)}else e.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ce,re.width,re.height,J.depth,0,re.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?w&&e.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,re.width,re.height,J.depth,ae,Se,re.data):e.texImage3D(t.TEXTURE_2D_ARRAY,z,ce,re.width,re.height,J.depth,0,ae,Se,re.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{Be&&Re&&e.texStorage2D(t.TEXTURE_2D,oe,ce,xe[0].width,xe[0].height);for(let z=0,se=xe.length;z<se;z++)re=xe[z],f.format!==xt?ae!==null?Be?w&&e.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,re.width,re.height,ae,re.data):e.compressedTexImage2D(t.TEXTURE_2D,z,ce,re.width,re.height,0,re.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?w&&e.texSubImage2D(t.TEXTURE_2D,z,0,0,re.width,re.height,ae,Se,re.data):e.texImage2D(t.TEXTURE_2D,z,ce,re.width,re.height,0,ae,Se,re.data)}else if(f.isDataArrayTexture)if(Be){if(Re&&e.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),w)if(f.layerUpdates.size>0){const z=Ar(J.width,J.height,f.format,f.type);for(const se of f.layerUpdates){const de=J.data.subarray(se*z/J.data.BYTES_PER_ELEMENT,(se+1)*z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,J.width,J.height,1,ae,Se,de)}f.clearLayerUpdates()}else e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ae,Se,J.data)}else e.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,ae,Se,J.data);else if(f.isData3DTexture)Be?(Re&&e.texStorage3D(t.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),w&&e.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ae,Se,J.data)):e.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,ae,Se,J.data);else if(f.isFramebufferTexture){if(Re)if(Be)e.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height);else{let z=J.width,se=J.height;for(let de=0;de<oe;de++)e.texImage2D(t.TEXTURE_2D,de,ce,z,se,0,ae,Se,null),z>>=1,se>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in t){const z=t.canvas;if(z.hasAttribute("layoutsubtree")||z.setAttribute("layoutsubtree","true"),J.parentNode!==z){z.appendChild(J),p.add(f),z.onpaint=se=>{const de=se.changedElements;for(const $ of p)de.includes($.image)&&($.needsUpdate=!0)},z.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const de=t.RGBA,$=t.RGBA,Me=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,de,$,Me,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Be&&Re){const z=ze(xe[0]);e.texStorage2D(t.TEXTURE_2D,oe,ce,z.width,z.height)}for(let z=0,se=xe.length;z<se;z++)re=xe[z],Be?w&&e.texSubImage2D(t.TEXTURE_2D,z,0,0,ae,Se,re):e.texImage2D(t.TEXTURE_2D,z,ce,ae,Se,re);f.generateMipmaps=!1}else if(Be){if(Re){const z=ze(J);e.texStorage2D(t.TEXTURE_2D,oe,ce,z.width,z.height)}w&&e.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Se,J)}else e.texImage2D(t.TEXTURE_2D,0,ce,ae,Se,J);l(f)&&C(Q),ie.__version=ne.version,f.onUpdate&&f.onUpdate(f)}S.__version=f.version}function Le(S,f,U){if(f.image.length!==6)return;const Q=Je(S,f),k=f.source;e.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+U);const ne=i.get(k);if(k.version!==ne.__version||Q===!0){e.activeTexture(t.TEXTURE0+U);const ie=Ze.getPrimaries(Ze.workingColorSpace),H=f.colorSpace===pn?null:Ze.getPrimaries(f.colorSpace),J=f.colorSpace===pn||ie===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;e.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(t.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ae=f.isCompressedTexture||f.image[0].isCompressedTexture,Se=f.image[0]&&f.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!ae&&!Se?ce[$]=u(f.image[$],!0,a.maxCubemapSize):ce[$]=Se?f.image[$].image:f.image[$],ce[$]=Ct(f,ce[$]);const re=ce[0],xe=r.convert(f.format,f.colorSpace),Be=r.convert(f.type),Re=_(f.internalFormat,xe,Be,f.normalized,f.colorSpace),w=f.isVideoTexture!==!0,oe=ne.__version===void 0||Q===!0,z=k.dataReady;let se=v(f,re);Xe(t.TEXTURE_CUBE_MAP,f);let de;if(ae){w&&oe&&e.texStorage2D(t.TEXTURE_CUBE_MAP,se,Re,re.width,re.height);for(let $=0;$<6;$++){de=ce[$].mipmaps;for(let Me=0;Me<de.length;Me++){const Ie=de[Me];f.format!==xt?xe!==null?w?z&&e.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Ie.width,Ie.height,xe,Ie.data):e.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Re,Ie.width,Ie.height,0,Ie.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?z&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Ie.width,Ie.height,xe,Be,Ie.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Re,Ie.width,Ie.height,0,xe,Be,Ie.data)}}}else{if(de=f.mipmaps,w&&oe){de.length>0&&se++;const $=ze(ce[0]);e.texStorage2D(t.TEXTURE_CUBE_MAP,se,Re,$.width,$.height)}for(let $=0;$<6;$++)if(Se){w?z&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,xe,Be,ce[$].data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Re,ce[$].width,ce[$].height,0,xe,Be,ce[$].data);for(let Me=0;Me<de.length;Me++){const tt=de[Me].image[$].image;w?z&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,tt.width,tt.height,xe,Be,tt.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Re,tt.width,tt.height,0,xe,Be,tt.data)}}else{w?z&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe,Be,ce[$]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Re,xe,Be,ce[$]);for(let Me=0;Me<de.length;Me++){const Ie=de[Me];w?z&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,xe,Be,Ie.image[$]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Re,xe,Be,Ie.image[$])}}}l(f)&&C(t.TEXTURE_CUBE_MAP),ne.__version=k.version,f.onUpdate&&f.onUpdate(f)}S.__version=f.version}function me(S,f,U,Q,k,ne){const ie=r.convert(U.format,U.colorSpace),H=r.convert(U.type),J=_(U.internalFormat,ie,H,U.normalized,U.colorSpace),ae=i.get(f),Se=i.get(U);if(Se.__renderTarget=f,!ae.__hasExternalTextures){const ce=Math.max(1,f.width>>ne),re=Math.max(1,f.height>>ne);k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?e.texImage3D(k,ne,J,ce,re,f.depth,0,ie,H,null):e.texImage2D(k,ne,J,ce,re,0,ie,H,null)}e.bindFramebuffer(t.FRAMEBUFFER,S),dt(f)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,k,Se.__webglTexture,0,At(f)):(k===t.TEXTURE_2D||k>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,k,Se.__webglTexture,ne),e.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(S,f,U){if(t.bindRenderbuffer(t.RENDERBUFFER,S),f.depthBuffer){const Q=f.depthTexture,k=Q&&Q.isDepthTexture?Q.type:null,ne=I(f.stencilBuffer,k),ie=f.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;dt(f)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,At(f),ne,f.width,f.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,At(f),ne,f.width,f.height):t.renderbufferStorage(t.RENDERBUFFER,ne,f.width,f.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,S)}else{const Q=f.textures;for(let k=0;k<Q.length;k++){const ne=Q[k],ie=r.convert(ne.format,ne.colorSpace),H=r.convert(ne.type),J=_(ne.internalFormat,ie,H,ne.normalized,ne.colorSpace);dt(f)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,At(f),J,f.width,f.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,At(f),J,f.width,f.height):t.renderbufferStorage(t.RENDERBUFFER,J,f.width,f.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function mt(S,f,U){const Q=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(t.FRAMEBUFFER,S),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=i.get(f.depthTexture);if(k.__renderTarget=f,(!k.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),Q){if(k.__webglInit===void 0&&(k.__webglInit=!0,f.depthTexture.addEventListener("dispose",T)),k.__webglTexture===void 0){k.__webglTexture=t.createTexture(),e.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,f.depthTexture);const ae=r.convert(f.depthTexture.format),Se=r.convert(f.depthTexture.type);let ce;f.depthTexture.format===Nn?ce=t.DEPTH_COMPONENT24:f.depthTexture.format===Bn&&(ce=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ce,f.width,f.height,0,ae,Se,null)}}else te(f.depthTexture,0);const ne=k.__webglTexture,ie=At(f),H=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,J=f.depthTexture.format===Bn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(f.depthTexture.format===Nn)dt(f)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,H,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,J,H,ne,0);else if(f.depthTexture.format===Bn)dt(f)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,H,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,J,H,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(S){const f=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==S.depthTexture){const Q=S.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),Q){const k=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,Q.removeEventListener("dispose",k)};Q.addEventListener("dispose",k),f.__depthDisposeCallback=k}f.__boundDepthTexture=Q}if(S.depthTexture&&!f.__autoAllocateDepthBuffer)if(U)for(let Q=0;Q<6;Q++)mt(f.__webglFramebuffer[Q],S,Q);else{const Q=S.texture.mipmaps;Q&&Q.length>0?mt(f.__webglFramebuffer[0],S,0):mt(f.__webglFramebuffer,S,0)}else if(U){f.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(t.FRAMEBUFFER,f.__webglFramebuffer[Q]),f.__webglDepthbuffer[Q]===void 0)f.__webglDepthbuffer[Q]=t.createRenderbuffer(),Qe(f.__webglDepthbuffer[Q],S,!1);else{const k=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=f.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,k,t.RENDERBUFFER,ne)}}else{const Q=S.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(t.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(t.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=t.createRenderbuffer(),Qe(f.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=f.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,k,t.RENDERBUFFER,ne)}}e.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(S,f,U){const Q=i.get(S);f!==void 0&&me(Q.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ue(S)}function et(S){const f=S.texture,U=i.get(S),Q=i.get(f);S.addEventListener("dispose",E);const k=S.textures,ne=S.isWebGLCubeRenderTarget===!0,ie=k.length>1;if(ie||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=f.version,o.memory.textures++),ne){U.__webglFramebuffer=[];for(let H=0;H<6;H++)if(f.mipmaps&&f.mipmaps.length>0){U.__webglFramebuffer[H]=[];for(let J=0;J<f.mipmaps.length;J++)U.__webglFramebuffer[H][J]=t.createFramebuffer()}else U.__webglFramebuffer[H]=t.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){U.__webglFramebuffer=[];for(let H=0;H<f.mipmaps.length;H++)U.__webglFramebuffer[H]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ie)for(let H=0,J=k.length;H<J;H++){const ae=i.get(k[H]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&dt(S)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let H=0;H<k.length;H++){const J=k[H];U.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[H]);const ae=r.convert(J.format,J.colorSpace),Se=r.convert(J.type),ce=_(J.internalFormat,ae,Se,J.normalized,J.colorSpace,S.isXRRenderTarget===!0),re=At(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ce,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,U.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Qe(U.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){e.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,f);for(let H=0;H<6;H++)if(f.mipmaps&&f.mipmaps.length>0)for(let J=0;J<f.mipmaps.length;J++)me(U.__webglFramebuffer[H][J],S,f,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,J);else me(U.__webglFramebuffer[H],S,f,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);l(f)&&C(t.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ie){for(let H=0,J=k.length;H<J;H++){const ae=k[H],Se=i.get(ae);let ce=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(ce,Se.__webglTexture),Xe(ce,ae),me(U.__webglFramebuffer,S,ae,t.COLOR_ATTACHMENT0+H,ce,0),l(ae)&&C(ce)}e.unbindTexture()}else{let H=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(H=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(H,Q.__webglTexture),Xe(H,f),f.mipmaps&&f.mipmaps.length>0)for(let J=0;J<f.mipmaps.length;J++)me(U.__webglFramebuffer[J],S,f,t.COLOR_ATTACHMENT0,H,J);else me(U.__webglFramebuffer,S,f,t.COLOR_ATTACHMENT0,H,0);l(f)&&C(H),e.unbindTexture()}S.depthBuffer&&Ue(S)}function Ne(S){const f=S.textures;for(let U=0,Q=f.length;U<Q;U++){const k=f[U];if(l(k)){const ne=B(S),ie=i.get(k).__webglTexture;e.bindTexture(ne,ie),C(ne),e.unbindTexture()}}}const st=[],bt=[];function wt(S){if(S.samples>0){if(dt(S)===!1){const f=S.textures,U=S.width,Q=S.height;let k=t.COLOR_BUFFER_BIT;const ne=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(S),H=f.length>1;if(H)for(let ae=0;ae<f.length;ae++)e.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),e.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);e.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const J=S.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):e.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ae=0;ae<f.length;ae++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(k|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(k|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ae]);const Se=i.get(f[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,k,t.NEAREST),c===!0&&(st.length=0,bt.length=0,st.push(t.COLOR_ATTACHMENT0+ae),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(st.push(ne),bt.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(t.READ_FRAMEBUFFER,null),e.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let ae=0;ae<f.length;ae++){e.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ae]);const Se=i.get(f[ae]).__webglTexture;e.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,Se,0)}e.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&c){const f=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[f])}}}function At(S){return Math.min(a.maxSamples,S.samples)}function dt(S){const f=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function D(S){const f=o.render.frame;h.get(S)!==f&&(h.set(S,f),S.update())}function Ct(S,f){const U=S.colorSpace,Q=S.format,k=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==Nt&&U!==pn&&(Ze.getTransfer(U)===at?(Q!==xt||k!==Te)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",U)),f}function ze(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(A.width=S.naturalWidth||S.width,A.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(A.width=S.displayWidth,A.height=S.displayHeight):(A.width=S.width,A.height=S.height),A}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=y,this.setTextureUnits=V,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=Y,this.rebindTextures=ke,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=me,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function vp(t,n){function e(i,a=pn){let r;const o=Ze.getTransfer(a);if(i===Te)return t.UNSIGNED_BYTE;if(i===lo)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fo)return t.UNSIGNED_SHORT_5_5_5_1;if(i===va)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Sa)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zc)return t.BYTE;if(i===$c)return t.SHORT;if(i===Qn)return t.UNSIGNED_SHORT;if(i===go)return t.INT;if(i===vn)return t.UNSIGNED_INT;if(i===yt)return t.FLOAT;if(i===St)return t.HALF_FLOAT;if(i===eA)return t.ALPHA;if(i===mi)return t.RGB;if(i===xt)return t.RGBA;if(i===Nn)return t.DEPTH_COMPONENT;if(i===Bn)return t.DEPTH_STENCIL;if(i===Rn)return t.RED;if(i===Ao)return t.RED_INTEGER;if(i===zt)return t.RG;if(i===co)return t.RG_INTEGER;if(i===so)return t.RGBA_INTEGER;if(i===jn||i===Dn||i===Di||i===Ln)if(o===at)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Di)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ln)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Di)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ln)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===na||i===Ja||i===ti||i===Ei)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ti)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ei)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ia||i===_i||i===bi||i===aa||i===ra||i===Ii||i===oa)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ia||i===_i)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bi)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===aa)return r.COMPRESSED_R11_EAC;if(i===ra)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ii)return r.COMPRESSED_RG11_EAC;if(i===oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yn||i===ja||i===Ya||i===Za||i===Yn||i===$a||i===er||i===tr||i===nr||i===ir||i===ar||i===rr||i===or||i===sr)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yn)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yn)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===er)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tr)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nr)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ir)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ar)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rr)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===or)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sr)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ni||i===cr||i===sa)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===ni)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ca||i===Aa||i===Ci||i===la)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ci)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$n?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:e}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,e){if(this.texture===null){const i=new ho(n.texture);(n.depthNear!==e.depthNear||n.depthFar!==e.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const e=n.cameras[0].viewport,i=new cn({vertexShader:Sp,fragmentShader:xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bp extends Uc{constructor(n,e){super();const i=this;let a=null,r=1,o=null,s="local-floor",c=1,A=null,h=null,p=null,d=null,m=null,b=null;const M=typeof XRWebGLBinding<"u",u=new Mp,l={},C=e.getContextAttributes();let B=null,_=null;const I=[],v=[],T=new Mt;let E=null,x=null;const L=new Jn;L.viewport=new Lt;const N=new Jn;N.viewport=new Lt;const O=[L,N],q=new Pc;let y=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=I[W];return Z===void 0&&(Z=new wi,I[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=I[W];return Z===void 0&&(Z=new wi,I[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=I[W];return Z===void 0&&(Z=new wi,I[W]=Z),Z.getHandSpace()};function K(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ve=I[Z];ve!==void 0&&(ve.update(W.inputSource,W.frame,A||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",te);for(let W=0;W<I.length;W++){const Z=v[W];Z!==null&&(v[W]=null,I[W].disconnect(Z))}y=null,V=null,u.reset();for(const W in l)delete l[W];if(n.setRenderTarget(B),m=null,d=null,p=null,a=null,_=null,Je.stop(),i.isPresenting=!1,n.setPixelRatio(E),n.setSize(T.width,T.height,!1),x!==null){const W=x.camera;W.fov=x.fov,W.zoom=x.zoom,W.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||o},this.setReferenceSpace=function(W){A=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,e)),p},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(B=n.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",X),a.addEventListener("inputsourceschange",te),C.xrCompatible!==!0&&await e.makeXRCompatible(),E=n.getPixelRatio(),n.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,me=null;C.depth&&(me=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ve=C.stencil?Bn:Nn,Le=C.stencil?$n:vn);const Qe={colorFormat:e.RGBA8,depthFormat:me,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Qe),a.updateRenderState({layers:[d]}),n.setPixelRatio(1),n.setSize(d.textureWidth,d.textureHeight,!1),_=new Kt(d.textureWidth,d.textureHeight,{format:xt,type:Te,depthTexture:new gi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:C.stencil,colorSpace:n.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,e,ve),a.updateRenderState({baseLayer:m}),n.setPixelRatio(1),n.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Kt(m.framebufferWidth,m.framebufferHeight,{format:xt,type:Te,colorSpace:n.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),A=null,o=await a.requestReferenceSpace(s),Je.setContext(a),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function te(W){for(let Z=0;Z<W.removed.length;Z++){const ve=W.removed[Z],Le=v.indexOf(ve);Le>=0&&(v[Le]=null,I[Le].disconnect(ve))}for(let Z=0;Z<W.added.length;Z++){const ve=W.added[Z];let Le=v.indexOf(ve);if(Le===-1){for(let Qe=0;Qe<I.length;Qe++)if(Qe>=v.length){v.push(ve),Le=Qe;break}else if(v[Qe]===null){v[Qe]=ve,Le=Qe;break}if(Le===-1)break}const me=I[Le];me&&me.connect(ve)}}const j=new he,ee=new he;function Y(W,Z,ve){j.setFromMatrixPosition(Z.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const Le=j.distanceTo(ee),me=Z.projectionMatrix.elements,Qe=ve.projectionMatrix.elements,mt=me[14]/(me[10]-1),Ue=me[14]/(me[10]+1),ke=(me[9]+1)/me[5],et=(me[9]-1)/me[5],Ne=(me[8]-1)/me[0],st=(Qe[8]+1)/Qe[0],bt=mt*Ne,wt=mt*st,At=Le/(-Ne+st),dt=At*-Ne;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(dt),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),me[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const D=mt+At,Ct=Ue+At,ze=bt-dt,S=wt+(Le-dt),f=ke*Ue/Ct*D,U=et*Ue/Ct*D;W.projectionMatrix.makePerspective(ze,S,f,U,D,Ct),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ge(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let Z=W.near,ve=W.far;u.texture!==null&&(u.depthNear>0&&(Z=u.depthNear),u.depthFar>0&&(ve=u.depthFar)),q.near=N.near=L.near=Z,q.far=N.far=L.far=ve,(y!==q.near||V!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),y=q.near,V=q.far),q.layers.mask=W.layers.mask|6,L.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;const Le=W.parent,me=q.cameras;ge(q,Le);for(let Qe=0;Qe<me.length;Qe++)ge(me[Qe],Le);me.length===2?Y(q,L,N):q.projectionMatrix.copy(L.projectionMatrix),x===null&&W.isPerspectiveCamera&&(x={camera:W,fov:W.fov,zoom:W.zoom}),be(W,q,Le)};function be(W,Z,ve){ve===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(q)},this.getCameraTexture=function(W){return l[W]};let $e=null;function Xe(W,Z){if(h=Z.getViewerPose(A||o),b=Z,h!==null){const ve=h.views;m!==null&&(n.setRenderTargetFramebuffer(_,m.framebuffer),n.setRenderTarget(_));let Le=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,Le=!0);for(let Ue=0;Ue<ve.length;Ue++){const ke=ve[Ue];let et=null;if(m!==null)et=m.getViewport(ke);else{const st=p.getViewSubImage(d,ke);et=st.viewport,Ue===0&&(n.setRenderTargetTextures(_,st.colorTexture,st.depthStencilTexture),n.setRenderTarget(_))}let Ne=O[Ue];Ne===void 0&&(Ne=new Jn,Ne.layers.enable(Ue),Ne.viewport=new Lt,O[Ue]=Ne),Ne.matrix.fromArray(ke.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ke.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(et.x,et.y,et.width,et.height),Ue===0&&(q.matrix.copy(Ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Le===!0&&q.cameras.push(Ne)}const me=a.enabledFeatures;if(me&&me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const Ue=p.getDepthInformation(ve[0]);Ue&&Ue.isValid&&Ue.texture&&u.init(Ue,a.renderState)}if(me&&me.includes("camera-access")&&M){n.state.unbindTexture(),p=i.getBinding();for(let Ue=0;Ue<ve.length;Ue++){const ke=ve[Ue].camera;if(ke){let et=l[ke];et||(et=new ho,l[ke]=et);const Ne=p.getCameraImage(ke);et.sourceTexture=Ne}}}}for(let ve=0;ve<I.length;ve++){const Le=v[ve],me=I[ve];Le!==null&&me!==void 0&&me.update(Le,Z,A||o)}$e&&$e(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),b=null}const Je=new Ho;Je.setAnimationLoop(Xe),this.setAnimationLoop=function(W){$e=W},this.dispose=function(){}}}const Tp=new Xt,Jo=new Ge;Jo.set(-1,0,0,0,1,0,0,0,1);function Rp(t,n){function e(u,l){u.matrixAutoUpdate===!0&&u.updateMatrix(),l.value.copy(u.matrix)}function i(u,l){l.color.getRGB(u.fogColor.value,uo(t)),l.isFog?(u.fogNear.value=l.near,u.fogFar.value=l.far):l.isFogExp2&&(u.fogDensity.value=l.density)}function a(u,l,C,B,_){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?r(u,l):l.isMeshLambertMaterial?(r(u,l),l.envMap&&(u.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(r(u,l),p(u,l)):l.isMeshPhongMaterial?(r(u,l),h(u,l),l.envMap&&(u.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(r(u,l),d(u,l),l.isMeshPhysicalMaterial&&m(u,l,_)):l.isMeshMatcapMaterial?(r(u,l),b(u,l)):l.isMeshDepthMaterial?r(u,l):l.isMeshDistanceMaterial?(r(u,l),M(u,l)):l.isMeshNormalMaterial?r(u,l):l.isLineBasicMaterial?(o(u,l),l.isLineDashedMaterial&&s(u,l)):l.isPointsMaterial?c(u,l,C,B):l.isSpriteMaterial?A(u,l):l.isShadowMaterial?(u.color.value.copy(l.color),u.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(u,l){u.opacity.value=l.opacity,l.color&&u.diffuse.value.copy(l.color),l.emissive&&u.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(u.map.value=l.map,e(l.map,u.mapTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,e(l.alphaMap,u.alphaMapTransform)),l.bumpMap&&(u.bumpMap.value=l.bumpMap,e(l.bumpMap,u.bumpMapTransform),u.bumpScale.value=l.bumpScale,l.side===Rt&&(u.bumpScale.value*=-1)),l.normalMap&&(u.normalMap.value=l.normalMap,e(l.normalMap,u.normalMapTransform),u.normalScale.value.copy(l.normalScale),l.side===Rt&&u.normalScale.value.negate()),l.displacementMap&&(u.displacementMap.value=l.displacementMap,e(l.displacementMap,u.displacementMapTransform),u.displacementScale.value=l.displacementScale,u.displacementBias.value=l.displacementBias),l.emissiveMap&&(u.emissiveMap.value=l.emissiveMap,e(l.emissiveMap,u.emissiveMapTransform)),l.specularMap&&(u.specularMap.value=l.specularMap,e(l.specularMap,u.specularMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest);const C=n.get(l),B=C.envMap,_=C.envMapRotation;B&&(u.envMap.value=B,u.envMapRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(_)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Jo),u.reflectivity.value=l.reflectivity,u.ior.value=l.ior,u.refractionRatio.value=l.refractionRatio),l.lightMap&&(u.lightMap.value=l.lightMap,u.lightMapIntensity.value=l.lightMapIntensity,e(l.lightMap,u.lightMapTransform)),l.aoMap&&(u.aoMap.value=l.aoMap,u.aoMapIntensity.value=l.aoMapIntensity,e(l.aoMap,u.aoMapTransform))}function o(u,l){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,l.map&&(u.map.value=l.map,e(l.map,u.mapTransform))}function s(u,l){u.dashSize.value=l.dashSize,u.totalSize.value=l.dashSize+l.gapSize,u.scale.value=l.scale}function c(u,l,C,B){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,u.size.value=l.size*C,u.scale.value=B*.5,l.map&&(u.map.value=l.map,e(l.map,u.uvTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,e(l.alphaMap,u.alphaMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest)}function A(u,l){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,u.rotation.value=l.rotation,l.map&&(u.map.value=l.map,e(l.map,u.mapTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,e(l.alphaMap,u.alphaMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest)}function h(u,l){u.specular.value.copy(l.specular),u.shininess.value=Math.max(l.shininess,1e-4)}function p(u,l){l.gradientMap&&(u.gradientMap.value=l.gradientMap)}function d(u,l){u.metalness.value=l.metalness,l.metalnessMap&&(u.metalnessMap.value=l.metalnessMap,e(l.metalnessMap,u.metalnessMapTransform)),u.roughness.value=l.roughness,l.roughnessMap&&(u.roughnessMap.value=l.roughnessMap,e(l.roughnessMap,u.roughnessMapTransform)),l.envMap&&(u.envMapIntensity.value=l.envMapIntensity)}function m(u,l,C){u.ior.value=l.ior,l.sheen>0&&(u.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),u.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(u.sheenColorMap.value=l.sheenColorMap,e(l.sheenColorMap,u.sheenColorMapTransform)),l.sheenRoughnessMap&&(u.sheenRoughnessMap.value=l.sheenRoughnessMap,e(l.sheenRoughnessMap,u.sheenRoughnessMapTransform))),l.clearcoat>0&&(u.clearcoat.value=l.clearcoat,u.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(u.clearcoatMap.value=l.clearcoatMap,e(l.clearcoatMap,u.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,e(l.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(u.clearcoatNormalMap.value=l.clearcoatNormalMap,e(l.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Rt&&u.clearcoatNormalScale.value.negate())),l.dispersion>0&&(u.dispersion.value=l.dispersion),l.retroreflectivity>0&&(u.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(u.iridescence.value=l.iridescence,u.iridescenceIOR.value=l.iridescenceIOR,u.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(u.iridescenceMap.value=l.iridescenceMap,e(l.iridescenceMap,u.iridescenceMapTransform)),l.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=l.iridescenceThicknessMap,e(l.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),l.transmission>0&&(u.transmission.value=l.transmission,u.transmissionSamplerMap.value=C.texture,u.transmissionSamplerSize.value.set(C.width,C.height),l.transmissionMap&&(u.transmissionMap.value=l.transmissionMap,e(l.transmissionMap,u.transmissionMapTransform)),u.thickness.value=l.thickness,l.thicknessMap&&(u.thicknessMap.value=l.thicknessMap,e(l.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=l.attenuationDistance,u.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(u.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(u.anisotropyMap.value=l.anisotropyMap,e(l.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=l.specularIntensity,u.specularColor.value.copy(l.specularColor),l.specularColorMap&&(u.specularColorMap.value=l.specularColorMap,e(l.specularColorMap,u.specularColorMapTransform)),l.specularIntensityMap&&(u.specularIntensityMap.value=l.specularIntensityMap,e(l.specularIntensityMap,u.specularIntensityMapTransform))}function b(u,l){l.matcap&&(u.matcap.value=l.matcap)}function M(u,l){const C=n.get(l).light;u.referencePosition.value.setFromMatrixPosition(C.matrixWorld),u.nearDistance.value=C.shadow.camera.near,u.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function wp(t,n,e,i){let a={},r={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,I){const v=I.program;i.uniformBlockBinding(_,v)}function A(_,I){let v=a[_.id];v===void 0&&(u(_),v=h(_),a[_.id]=v,_.addEventListener("dispose",C));const T=I.program;i.updateUBOMapping(_,T);const E=n.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){const I=p();_.__bindingPointIndex=I;const v=t.createBuffer(),T=_.__size,E=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,T,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,I,v),v}function p(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const I=a[_.id],v=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,I);for(let E=0,x=v.length;E<x;E++){const L=v[E];if(Array.isArray(L))for(let N=0,O=L.length;N<O;N++)m(L[N],E,N,T);else m(L,E,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,I,v,T){if(M(_,I,v,T)===!0){const E=_.__offset,x=_.value;if(Array.isArray(x)){let L=0;for(let N=0;N<x.length;N++){const O=x[N],q=l(O);b(O,_.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(x,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,_.__data)}}function b(_,I,v){typeof _=="number"||typeof _=="boolean"?I[0]=_:_.isMatrix3?(I[0]=_.elements[0],I[1]=_.elements[1],I[2]=_.elements[2],I[3]=0,I[4]=_.elements[3],I[5]=_.elements[4],I[6]=_.elements[5],I[7]=0,I[8]=_.elements[6],I[9]=_.elements[7],I[10]=_.elements[8],I[11]=0):ArrayBuffer.isView(_)?I.set(new _.constructor(_.buffer,_.byteOffset,I.length)):_.toArray(I,v)}function M(_,I,v,T){const E=_.value,x=I+"_"+v;if(T[x]===void 0)return typeof E=="number"||typeof E=="boolean"?T[x]=E:ArrayBuffer.isView(E)?T[x]=E.slice():T[x]=E.clone(),!0;{const L=T[x];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return T[x]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(L.equals(E)===!1)return L.copy(E),!0}}return!1}function u(_){const I=_.uniforms;let v=0;const T=16;for(let x=0,L=I.length;x<L;x++){const N=Array.isArray(I[x])?I[x]:[I[x]];for(let O=0,q=N.length;O<q;O++){const y=N[O],V=Array.isArray(y.value)?y.value:[y.value];for(let K=0,X=V.length;K<X;K++){const te=V[K],j=l(te),ee=v%T,Y=ee%j.boundary,ge=ee+Y;v+=Y,ge!==0&&T-ge<j.storage&&(v+=T-ge),y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=v,v+=j.storage}}}const E=v%T;return E>0&&(v+=T-E),_.__size=v,_.__cache={},this}function l(_){const I={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(I.boundary=4,I.storage=4):_.isVector2?(I.boundary=8,I.storage=8):_.isVector3||_.isColor?(I.boundary=16,I.storage=12):_.isVector4?(I.boundary=16,I.storage=16):_.isMatrix3?(I.boundary=48,I.storage=48):_.isMatrix4?(I.boundary=64,I.storage=64):_.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(I.boundary=16,I.storage=_.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",_),I}function C(_){const I=_.target;I.removeEventListener("dispose",C);const v=o.indexOf(I.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(a[I.id]),delete a[I.id],delete r[I.id]}function B(){for(const _ in a)t.deleteBuffer(a[_]);o=[],a={},r={}}return{bind:c,update:A,dispose:B}}const Dp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yt=null;function Lp(){return Yt===null&&(Yt=new oo(Dp,16,16,zt,St),Yt.name="DFG_LUT",Yt.minFilter=gt,Yt.magFilter=gt,Yt.wrapS=hi,Yt.wrapT=hi,Yt.generateMipmaps=!1,Yt.needsUpdate=!0),Yt}class yp{constructor(n={}){const{canvas:e=ic(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:A=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Te}=n;this.isWebGLRenderer=!0;let b;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=i.getContextAttributes().alpha}else b=o;const M=m,u=new Set([so,co,Ao]),l=new Set([Te,vn,Qn,$n,lo,fo]),C=new Uint32Array(4),B=new Int32Array(4),_=new he;let I=null,v=null;const T=[],E=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,O=null,q=null,y=null,V=null;this._outputColorSpace=Pt;let K=0,X=0,te=null,j=-1,ee=null;const Y=new Lt,ge=new Lt;let be=null;const $e=new Fe(0);let Xe=0,Je=e.width,W=e.height,Z=1,ve=null,Le=null;const me=new Lt(0,0,Je,W),Qe=new Lt(0,0,Je,W);let mt=!1;const Ue=new ao;let ke=!1,et=!1;const Ne=new Xt,st=new he,bt=new Lt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function dt(){return te===null?Z:1}let D=i;function Ct(g,R){return e.getContext(g,R)}let ze,S,f,U,Q,k,ne,ie,H,J,ae,Se,ce,re,xe,Be,Re,w,oe,z,se,de,$;try{const g={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:A,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",Ve,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),D===null){const R="webgl2";if(D=Ct(R,g),D===null)throw Ct(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Me()}catch(g){throw e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Ve,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),ot("WebGLRenderer: "+g.message),g}function Me(){ze=new Ld(D),ze.init(),se=new vp(D,ze),S=new Cd(D,ze,n,se),f=new Ip(D,ze),S.reversedDepthBuffer&&d&&f.buffers.depth.setReversed(!0),q=D.createFramebuffer(),y=D.createFramebuffer(),V=D.createFramebuffer(),U=new Pd(D),Q=new sp,k=new Cp(D,ze,f,Q,S,se,U),ne=new Dd(L),ie=new FA(D),de=new bd(D,ie),H=new yd(D,ie,U,de),J=new Nd(D,H,ie,de,U),w=new Fd(D,S,k),xe=new vd(Q),ae=new op(L,ne,ze,S,de,xe),Se=new Rp(L,Q),ce=new Ap,re=new hp(ze),Re=new _d(L,ne,f,J,b,c),Be=new bp(L,J,S),$=new wp(D,U,S,f),oe=new Id(D,ze,U),z=new Ud(D,ze,U),U.programs=ae.programs,L.capabilities=S,L.extensions=ze,L.properties=Q,L.renderLists=ce,L.shadowMap=Be,L.state=f,L.info=U}M!==Te&&(x=new Gd(M,e.width,e.height,s,a,r));const Ie=new Bp(L,D);this.xr=Ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const g=ze.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=ze.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(g){g!==void 0&&(Z=g,this.setSize(Je,W,!1))},this.getSize=function(g){return g.set(Je,W)},this.setSize=function(g,R,G=!0){if(Ie.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=g,W=R,e.width=Math.floor(g*Z),e.height=Math.floor(R*Z),G===!0&&(e.style.width=g+"px",e.style.height=R+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,g,R)},this.getDrawingBufferSize=function(g){return g.set(Je*Z,W*Z).floor()},this.setDrawingBufferSize=function(g,R,G){Je=g,W=R,Z=G,e.width=Math.floor(g*G),e.height=Math.floor(R*G),this.setViewport(0,0,g,R)},this.setEffects=function(g){if(M===Te){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let R=0;R<g.length;R++)if(g[R].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(Y)},this.getViewport=function(g){return g.copy(me)},this.setViewport=function(g,R,G,P){g.isVector4?me.set(g.x,g.y,g.z,g.w):me.set(g,R,G,P),f.viewport(Y.copy(me).multiplyScalar(Z).round())},this.getScissor=function(g){return g.copy(Qe)},this.setScissor=function(g,R,G,P){g.isVector4?Qe.set(g.x,g.y,g.z,g.w):Qe.set(g,R,G,P),f.scissor(ge.copy(Qe).multiplyScalar(Z).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(g){f.setScissorTest(mt=g)},this.setOpaqueSort=function(g){ve=g},this.setTransparentSort=function(g){Le=g},this.getClearColor=function(g){return g.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(g=!0,R=!0,G=!0){let P=0;if(g){let F=!1;if(te!==null){const fe=te.texture.format;F=u.has(fe)}if(F){const fe=te.texture.type,pe=l.has(fe),le=Re.getClearColor(),Ee=Re.getClearAlpha(),Ce=le.r,we=le.g,Pe=le.b;pe?(C[0]=Ce,C[1]=we,C[2]=Pe,C[3]=Ee,D.clearBufferuiv(D.COLOR,0,C)):(B[0]=Ce,B[1]=we,B[2]=Pe,B[3]=Ee,D.clearBufferiv(D.COLOR,0,B))}else P|=D.COLOR_BUFFER_BIT}R&&(P|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(P|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&D.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),O=g},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Ve,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),Re.dispose(),ce.dispose(),re.dispose(),Q.dispose(),ne.dispose(),J.dispose(),de.dispose(),$.dispose(),ae.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Da),Ie.removeEventListener("sessionend",La),gn.stop()};function tt(g){g.preventDefault(),ka("WebGLRenderer: Context Lost."),N=!0}function Ve(){ka("WebGLRenderer: Context Restored."),N=!1;const g=U.autoReset,R=Be.enabled,G=Be.autoUpdate,P=Be.needsUpdate,F=Be.type;Me(),U.autoReset=g,Be.enabled=R,Be.autoUpdate=G,Be.needsUpdate=P,Be.type=F}function Wt(g){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Jt(g){const R=g.target;R.removeEventListener("dispose",Jt),Ws(R)}function Ws(g){qs(g),Q.remove(g)}function qs(g){const R=Q.get(g).programs;R!==void 0&&(R.forEach(function(G){ae.releaseProgram(G)}),g.isShaderMaterial&&ae.releaseShaderCache(g))}this.renderBufferDirect=function(g,R,G,P,F,fe){R===null&&(R=wt);const pe=F.isMesh&&F.matrixWorld.determinantAffine()<0,le=Xs(g,R,G,P,F);f.setMaterial(P,pe);let Ee=G.index,Ce=1;if(P.wireframe===!0){if(Ee=H.getWireframeAttribute(G),Ee===void 0)return;Ce=2}const we=G.drawRange,Pe=G.attributes.position;let _e=we.start*Ce,We=(we.start+we.count)*Ce;fe!==null&&(_e=Math.max(_e,fe.start*Ce),We=Math.min(We,(fe.start+fe.count)*Ce)),Ee!==null?(_e=Math.max(_e,0),We=Math.min(We,Ee.count)):Pe!=null&&(_e=Math.max(_e,0),We=Math.min(We,Pe.count));const ut=We-_e;if(ut<0||ut===1/0)return;de.setup(F,P,le,G,Ee);let rt,Ye=oe;if(Ee!==null&&(rt=ie.get(Ee),Ye=z,Ye.setIndex(rt)),F.isMesh)P.wireframe===!0?(f.setLineWidth(P.wireframeLinewidth*dt()),Ye.setMode(D.LINES)):Ye.setMode(D.TRIANGLES);else if(F.isLine){let vt=P.linewidth;vt===void 0&&(vt=1),f.setLineWidth(vt*dt()),F.isLineSegments?Ye.setMode(D.LINES):F.isLineLoop?Ye.setMode(D.LINE_LOOP):Ye.setMode(D.LINE_STRIP)}else F.isPoints?Ye.setMode(D.POINTS):F.isSprite&&Ye.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const vt=F._multiDrawStarts,ue=F._multiDrawCounts,Bt=F._multiDrawCount,Oe=Ee?ie.get(Ee).bytesPerElement:1,Qt=Q.get(P).currentProgram.getUniforms();for(let jt=0;jt<Bt;jt++)Qt.setValue(D,"_gl_DrawID",jt),Ye.render(vt[jt]/Oe,ue[jt])}else if(F.isInstancedMesh)Ye.renderInstances(_e,ut,F.count);else if(G.isInstancedBufferGeometry){const vt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ue=Math.min(G.instanceCount,vt);Ye.renderInstances(_e,ut,ue)}else Ye.render(_e,ut)};function wa(g,R,G,P){O!==null&&g.isNodeMaterial&&O.setObject(P,g),ke===!0&&xe.setState(g,G,!1),g.transparent===!0&&g.side===kt&&g.forceSinglePass===!1?(g.side=Rt,g.needsUpdate=!0,ri(g,R,P),g.side=Fn,g.needsUpdate=!0,ri(g,R,P),g.side=kt):ri(g,R,P)}this.compile=function(g,R,G=null){G===null&&(G=g),O!==null&&O.renderStart(g,R,G),v=re.get(G),v.init(R),E.push(v),G.traverseVisible(function(F){F.isLight&&F.layers.test(R.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),g!==G&&g.traverseVisible(function(F){F.isLight&&F.layers.test(R.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights(),O!==null&&O.updateLights(v.state.lightsArray),et=this.localClippingEnabled,ke=xe.init(this.clippingPlanes,et),ke===!0&&xe.setGlobalState(this.clippingPlanes,R),O!==null&&Be.render(v.state.shadowsArray,G,R);const P=new Set;return g.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const fe=F.material;if(fe)if(Array.isArray(fe))for(let pe=0;pe<fe.length;pe++){const le=fe[pe];wa(le,G,R,F),P.add(le)}else wa(fe,G,R,F),P.add(fe)}),v=E.pop(),O!==null&&O.renderEnd(),P},this.compileAsync=function(g,R,G=null){const P=this.compile(g,R,G);return new Promise(F=>{function fe(){if(P.forEach(function(pe){const Ee=Q.get(pe).currentProgram;(Ee===void 0||Ee.isReady())&&P.delete(pe)}),P.size===0){F(g);return}setTimeout(fe,10)}ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ti=null;function zs(g){Ti&&Ti(g)}function Da(){gn.stop()}function La(){gn.start()}const gn=new Ho;gn.setAnimationLoop(zs),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(g){Ti=g,Ie.setAnimationLoop(g),g===null?gn.stop():gn.start()},Ie.addEventListener("sessionstart",Da),Ie.addEventListener("sessionend",La),this.render=function(g,R){if(R!==void 0&&R.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(g,R);const G=Ie.enabled===!0&&Ie.isPresenting===!0,P=x!==null&&(te===null||G)&&x.begin(L,te);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(R),R=Ie.getCamera()),g.isScene===!0&&g.onBeforeRender(L,g,R,te),v=re.get(g,E.length),v.init(R),v.state.textureUnits=k.getTextureUnits(),E.push(v),Ne.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Ue.setFromProjectionMatrix(Ne,Ha,R.reversedDepth),et=this.localClippingEnabled,ke=xe.init(this.clippingPlanes,et),I=ce.get(g,T.length),I.init(),T.push(I),Ie.enabled===!0&&Ie.isPresenting===!0){const pe=L.xr.getDepthSensingMesh();pe!==null&&Ri(pe,R,-1/0,L.sortObjects)}Ri(g,R,0,L.sortObjects),I.finish(),O!==null&&O.updateLights(v.state.lightsArray),L.sortObjects===!0&&I.sort(ve,Le),At=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,At&&Re.addToRenderList(I,g),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&xe.beginShadows();const F=v.state.shadowsArray;if(Be.render(F,g,R),ke===!0&&xe.endShadows(),(P&&x.hasRenderPass())===!1){const pe=I.opaque,le=I.transmissive;if(v.setupLights(),R.isArrayCamera){const Ee=R.cameras;if(le.length>0)for(let Ce=0,we=Ee.length;Ce<we;Ce++){const Pe=Ee[Ce];Ua(pe,le,g,Pe)}At&&Re.render(g);for(let Ce=0,we=Ee.length;Ce<we;Ce++){const Pe=Ee[Ce];ya(I,g,Pe,Pe.viewport)}}else le.length>0&&Ua(pe,le,g,R),At&&Re.render(g),ya(I,g,R)}te!==null&&X===0&&(k.updateMultisampleRenderTarget(te),k.updateRenderTargetMipmap(te)),P&&x.end(L),g.isScene===!0&&g.onAfterRender(L,g,R),de.resetDefaultState(),j=-1,ee=null,E.pop(),E.length>0?(v=E[E.length-1],k.setTextureUnits(v.state.textureUnits),ke===!0&&xe.setGlobalState(L.clippingPlanes,v.state.camera)):v=null,T.pop(),T.length>0?I=T[T.length-1]:I=null,O!==null&&O.renderEnd()};function Ri(g,R,G,P){if(g.visible===!1)return;if(g.layers.test(R.layers)){if(g.isGroup)G=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(R);else if(g.isLightProbeGrid)v.pushLightProbeGrid(g);else if(g.isLight)v.pushLight(g),g.castShadow&&v.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||g.intersectsFrustum(Ue)){P&&bt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Ne);const pe=J.update(g),le=g.material;le.visible&&I.push(g,pe,le,G,bt.z,null,R)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||g.intersectsFrustum(Ue))){const pe=J.update(g),le=g.material;if(P&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),bt.copy(g.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),bt.copy(pe.boundingSphere.center)),bt.applyMatrix4(g.matrixWorld).applyMatrix4(Ne)),Array.isArray(le)){const Ee=pe.groups;for(let Ce=0,we=Ee.length;Ce<we;Ce++){const Pe=Ee[Ce],_e=le[Pe.materialIndex];_e&&_e.visible&&I.push(g,pe,_e,G,bt.z,Pe,R)}}else le.visible&&I.push(g,pe,le,G,bt.z,null,R)}}const fe=g.children;for(let pe=0,le=fe.length;pe<le;pe++)Ri(fe[pe],R,G,P)}function ya(g,R,G,P){const{opaque:F,transmissive:fe,transparent:pe}=g;v.setupLightsView(G),ke===!0&&xe.setGlobalState(L.clippingPlanes,G),P&&f.viewport(Y.copy(P)),F.length>0&&ai(F,R,G),fe.length>0&&ai(fe,R,G),pe.length>0&&ai(pe,R,G),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Ua(g,R,G,P){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[P.id]===void 0){const _e=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[P.id]=new Kt(1,1,{generateMipmaps:!0,type:_e?St:Te,minFilter:en,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const fe=v.state.transmissionRenderTarget[P.id],pe=P.viewport||Y;fe.setSize(pe.z*L.transmissionResolutionScale,pe.w*L.transmissionResolutionScale);const le=L.getRenderTarget(),Ee=L.getActiveCubeFace(),Ce=L.getActiveMipmapLevel();L.setRenderTarget(fe),L.getClearColor($e),Xe=L.getClearAlpha(),Xe<1&&L.setClearColor(16777215,.5),L.clear(),At&&Re.render(G);const we=L.toneMapping;L.toneMapping=nn;const Pe=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),v.setupLightsView(P),ke===!0&&xe.setGlobalState(L.clippingPlanes,P),ai(g,G,P),k.updateMultisampleRenderTarget(fe),k.updateRenderTargetMipmap(fe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let We=0,ut=R.length;We<ut;We++){const rt=R[We],{object:Ye,geometry:vt,material:ue,group:Bt}=rt;if(ue.side===kt&&Ye.layers.test(P.layers)){const Oe=ue.side;ue.side=Rt,ue.needsUpdate=!0,Pa(Ye,G,P,vt,ue,Bt),ue.side=Oe,ue.needsUpdate=!0,_e=!0}}_e===!0&&(k.updateMultisampleRenderTarget(fe),k.updateRenderTargetMipmap(fe))}L.setRenderTarget(le,Ee,Ce),L.setClearColor($e,Xe),Pe!==void 0&&(P.viewport=Pe),L.toneMapping=we}function ai(g,R,G){const P=R.isScene===!0?R.overrideMaterial:null;for(let F=0,fe=g.length;F<fe;F++){const pe=g[F],{object:le,geometry:Ee,group:Ce}=pe;let we=pe.material;we.allowOverride===!0&&P!==null&&(we=P),le.layers.test(G.layers)&&Pa(le,R,G,Ee,we,Ce)}}function Pa(g,R,G,P,F,fe){O!==null&&F.isNodeMaterial&&O.setObject(g,F),g.onBeforeRender(L,R,G,P,F,fe),g.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),F.onBeforeRender(L,R,G,P,g,fe),F.transparent===!0&&F.side===kt&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,L.renderBufferDirect(G,R,P,F,g,fe),F.side=Fn,F.needsUpdate=!0,L.renderBufferDirect(G,R,P,F,g,fe),F.side=kt):L.renderBufferDirect(G,R,P,F,g,fe),g.onAfterRender(L,R,G,P,F,fe)}function ri(g,R,G){R.isScene!==!0&&(R=wt);const P=Q.get(g),F=v.state.lights,fe=v.state.shadowsArray,pe=F.state.version,le=ae.getParameters(g,F.state,fe,R,G,v.state.lightProbeGridArray),Ee=ae.getProgramCacheKey(le);let Ce=P.programs;P.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,P.fog=R.fog;const we=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;P.envMap=ne.get(g.envMap||P.environment,we),P.envMapRotation=P.environment!==null&&g.envMap===null?R.environmentRotation:g.envMapRotation,Ce===void 0&&(g.addEventListener("dispose",Jt),Ce=new Map,P.programs=Ce);let Pe=Ce.get(Ee);if(Pe!==void 0){if(P.currentProgram===Pe&&P.lightsStateVersion===pe)return Na(g,le),Pe}else le.uniforms=ae.getUniforms(g),O!==null&&g.isNodeMaterial&&O.build(g,G,le),g.onBeforeCompile(le,L),Pe=ae.acquireProgram(le,Ee),Ce.set(Ee,Pe),P.uniforms=le.uniforms;const _e=P.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(_e.clippingPlanes=xe.uniform),Na(g,le),P.needsLights=js(g),P.lightsStateVersion=pe,P.needsLights&&(_e.ambientLightColor.value=F.state.ambient,_e.lightProbe.value=F.state.probe,_e.sunLights.value=F.state.sun,_e.sunLightShadows.value=F.state.sunShadow,_e.directionalLights.value=F.state.directional,_e.directionalLightShadows.value=F.state.directionalShadow,_e.spotLights.value=F.state.spot,_e.spotLightShadows.value=F.state.spotShadow,_e.rectAreaLights.value=F.state.rectArea,_e.ltc_1.value=F.state.rectAreaLTC1,_e.ltc_2.value=F.state.rectAreaLTC2,_e.pointLights.value=F.state.point,_e.pointLightShadows.value=F.state.pointShadow,_e.hemisphereLights.value=F.state.hemi,_e.sunShadowMatrix.value=F.state.sunShadowMatrix,_e.sunShadowCascade.value=F.state.sunShadowCascade,_e.directionalShadowMatrix.value=F.state.directionalShadowMatrix,_e.spotLightMatrix.value=F.state.spotLightMatrix,_e.spotLightMap.value=F.state.spotLightMap,_e.pointShadowMatrix.value=F.state.pointShadowMatrix),P.lightProbeGrid=v.state.lightProbeGridArray.length>0,P.currentProgram=Pe,P.uniformsList=null,Pe}function Fa(g){if(g.uniformsList===null){const R=g.currentProgram.getUniforms();g.uniformsList=pi.seqWithValue(R.seq,g.uniforms)}return g.uniformsList}function Na(g,R){const G=Q.get(g);G.outputColorSpace=R.outputColorSpace,G.batching=R.batching,G.batchingColor=R.batchingColor,G.instancing=R.instancing,G.instancingColor=R.instancingColor,G.instancingMorph=R.instancingMorph,G.skinning=R.skinning,G.morphTargets=R.morphTargets,G.morphNormals=R.morphNormals,G.morphColors=R.morphColors,G.morphTargetsCount=R.morphTargetsCount,G.numClippingPlanes=R.numClippingPlanes,G.numIntersection=R.numClipIntersection,G.vertexAlphas=R.vertexAlphas,G.vertexTangents=R.vertexTangents,G.toneMapping=R.toneMapping}function Ks(g,R){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;_.setFromMatrixPosition(R.matrixWorld);for(let G=0,P=g.length;G<P;G++){const F=g[G];if(F.texture!==null&&F.boundingBox.containsPoint(_))return F}return null}function Xs(g,R,G,P,F){R.isScene!==!0&&(R=wt),k.resetTextureUnits();const fe=R.fog,pe=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?R.environment:null,le=te===null?L.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,Ee=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Ce=ne.get(P.envMap||pe,Ee),we=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!G.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),_e=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let rt=nn;P.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(rt=L.toneMapping);const Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,vt=Ye!==void 0?Ye.length:0,ue=Q.get(P),Bt=v.state.lights;if(ke===!0&&(et===!0||g!==ee)){const nt=g===ee&&P.id===j;xe.setState(P,g,nt)}let Oe=!1;P.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Bt.state.version||ue.outputColorSpace!==le||F.isBatchedMesh&&ue.batching===!1||!F.isBatchedMesh&&ue.batching===!0||F.isBatchedMesh&&ue.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&ue.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&ue.instancing===!1||!F.isInstancedMesh&&ue.instancing===!0||F.isSkinnedMesh&&ue.skinning===!1||!F.isSkinnedMesh&&ue.skinning===!0||F.isInstancedMesh&&ue.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ue.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ue.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ue.instancingMorph===!1&&F.morphTexture!==null||ue.envMap!==Ce||P.fog===!0&&ue.fog!==fe||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==xe.numPlanes||ue.numIntersection!==xe.numIntersection)||ue.vertexAlphas!==we||ue.vertexTangents!==Pe||ue.morphTargets!==_e||ue.morphNormals!==We||ue.morphColors!==ut||ue.toneMapping!==rt||ue.morphTargetsCount!==vt||!!ue.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,ue.__version=P.version);let Qt=ue.currentProgram;Oe===!0&&(Qt=ri(P,R,F),O&&P.isNodeMaterial&&O.onUpdateProgram(P,Qt,ue));let jt=!1,ln=!1,Sn=!1;const je=Qt.getUniforms(),lt=ue.uniforms;if(f.useProgram(Qt.program)&&(jt=!0,ln=!0,Sn=!0),P.id!==j&&(j=P.id,ln=!0),ue.needsLights){const nt=Ks(v.state.lightProbeGridArray,F);ue.lightProbeGrid!==nt&&(ue.lightProbeGrid=nt,ln=!0)}if(jt||ee!==g){f.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),je.setValue(D,"projectionMatrix",g.projectionMatrix),je.setValue(D,"viewMatrix",g.matrixWorldInverse);const dn=je.map.cameraPosition;dn!==void 0&&dn.setValue(D,st.setFromMatrixPosition(g.matrixWorld)),S.logarithmicDepthBuffer&&je.setValue(D,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&je.setValue(D,"isOrthographic",g.isOrthographicCamera===!0),ee!==g&&(ee=g,ln=!0,Sn=!0)}if(ue.needsLights&&(Bt.state.sunShadowMap.length>0&&je.setValue(D,"sunShadowMap",Bt.state.sunShadowMap,k),Bt.state.directionalShadowMap.length>0&&je.setValue(D,"directionalShadowMap",Bt.state.directionalShadowMap,k),Bt.state.spotShadowMap.length>0&&je.setValue(D,"spotShadowMap",Bt.state.spotShadowMap,k),Bt.state.pointShadowMap.length>0&&je.setValue(D,"pointShadowMap",Bt.state.pointShadowMap,k)),F.isSkinnedMesh){je.setOptional(D,F,"bindMatrix"),je.setOptional(D,F,"bindMatrixInverse");const nt=F.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),je.setValue(D,"boneTexture",nt.boneTexture,k))}F.isBatchedMesh&&(je.setOptional(D,F,"batchingTexture"),je.setValue(D,"batchingTexture",F._matricesTexture,k),je.setOptional(D,F,"batchingIdTexture"),je.setValue(D,"batchingIdTexture",F._indirectTexture,k),je.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&je.setValue(D,"batchingColorTexture",F._colorsTexture,k));const fn=G.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&w.update(F,G,Qt),(ln||ue.receiveShadow!==F.receiveShadow)&&(ue.receiveShadow=F.receiveShadow,je.setValue(D,"receiveShadow",F.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&R.environment!==null&&(lt.envMapIntensity.value=R.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=Lp()),ln){if(je.setValue(D,"toneMappingExposure",L.toneMappingExposure),ue.needsLights&&Js(lt,Sn),fe&&P.fog===!0&&Se.refreshFogUniforms(lt,fe),Se.refreshMaterialUniforms(lt,P,Z,W,v.state.transmissionRenderTarget[g.id]),ue.needsLights&&ue.lightProbeGrid){const nt=ue.lightProbeGrid;lt.probesSH.value=nt.texture,lt.probesMin.value.copy(nt.boundingBox.min),lt.probesMax.value.copy(nt.boundingBox.max),lt.probesResolution.value.copy(nt.resolution)}pi.upload(D,Fa(ue),lt,k)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(pi.upload(D,Fa(ue),lt,k),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&je.setValue(D,"center",F.center),je.setValue(D,"modelViewMatrix",F.modelViewMatrix),je.setValue(D,"normalMatrix",F.normalMatrix),je.setValue(D,"modelMatrix",F.matrixWorld),P.uniformsGroups!==void 0){const nt=P.uniformsGroups;for(let dn=0,xn=nt.length;dn<xn;dn++){const Ga=nt[dn];$.update(Ga,Qt),$.bind(Ga,Qt)}}return Qt}function Js(g,R){g.ambientLightColor.needsUpdate=R,g.lightProbe.needsUpdate=R,g.sunLights.needsUpdate=R,g.sunLightShadows.needsUpdate=R,g.directionalLights.needsUpdate=R,g.directionalLightShadows.needsUpdate=R,g.pointLights.needsUpdate=R,g.pointLightShadows.needsUpdate=R,g.spotLights.needsUpdate=R,g.spotLightShadows.needsUpdate=R,g.rectAreaLights.needsUpdate=R,g.hemisphereLights.needsUpdate=R}function js(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(g,R,G){const P=Q.get(g);P.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Q.get(g.texture).__webglTexture=R,Q.get(g.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:G,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,R){const G=Q.get(g);G.__webglFramebuffer=R,G.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(g,R=0,G=0){te=g,K=R,X=G;let P=null,F=!1,fe=!1;if(g){const le=Q.get(g);if(le.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),Y.copy(g.viewport),ge.copy(g.scissor),be=g.scissorTest,f.viewport(Y),f.scissor(ge),f.setScissorTest(be),j=-1;return}else if(le.__webglFramebuffer===void 0)k.setupRenderTarget(g);else if(le.__hasExternalTextures)k.rebindTextures(g,Q.get(g.texture).__webglTexture,Q.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const we=g.depthTexture;if(le.__boundDepthTexture!==we){if(we!==null&&Q.has(we)&&(g.width!==we.image.width||g.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(g)}}const Ee=g.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(fe=!0);const Ce=Q.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ce[R])?P=Ce[R][G]:P=Ce[R],F=!0):g.samples>0&&k.useMultisampledRTT(g)===!1?P=Q.get(g).__webglMultisampledFramebuffer:Array.isArray(Ce)?P=Ce[G]:P=Ce,Y.copy(g.viewport),ge.copy(g.scissor),be=g.scissorTest}else Y.copy(me).multiplyScalar(Z).floor(),ge.copy(Qe).multiplyScalar(Z).floor(),be=mt;if(G!==0&&(P=q),f.bindFramebuffer(D.FRAMEBUFFER,P)&&f.drawBuffers(g,P),f.viewport(Y),f.scissor(ge),f.setScissorTest(be),F){const le=Q.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,le.__webglTexture,G)}else if(fe){const le=R;for(let Ee=0;Ee<g.textures.length;Ee++){const Ce=Q.get(g.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,G,le)}}else if(g!==null&&G!==0){const le=Q.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,G)}j=-1};function Qa(g){const R=Q.get(g);return(R.__readFormat!==g.format||R.__readType!==g.type)&&(R.__readFormat=g.format,R.__readType=g.type,R.__formatReadable=S.textureFormatReadable(g.format),R.__typeReadable=S.textureTypeReadable(g.type)),R}this.readRenderTargetPixels=function(g,R,G,P,F,fe,pe,le=0){if(!(g&&g.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Q.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){f.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ce=g.textures[le],we=Ce.format,Pe=Ce.type;g.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const _e=Qa(Ce);if(_e.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_e.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=g.width-P&&G>=0&&G<=g.height-F&&D.readPixels(R,G,P,F,se.convert(we),se.convert(Pe),fe)}finally{const Ce=te!==null?Q.get(te).__webglFramebuffer:null;f.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(g,R,G,P,F,fe,pe,le=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Q.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee)if(R>=0&&R<=g.width-P&&G>=0&&G<=g.height-F){f.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ce=g.textures[le],we=Ce.format,Pe=Ce.type;g.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const _e=Qa(Ce);if(_e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(R,G,P,F,se.convert(we),se.convert(Pe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const ut=te!==null?Q.get(te).__webglFramebuffer:null;f.bindFramebuffer(D.FRAMEBUFFER,ut);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await rc(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(We),D.deleteSync(rt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,R=null,G=0){const P=Math.pow(2,-G),F=Math.floor(g.image.width*P),fe=Math.floor(g.image.height*P),pe=R!==null?R.x:0,le=R!==null?R.y:0;k.setTexture2D(g,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,le,F,fe),f.unbindTexture()},this.copyTextureToTexture=function(g,R,G=null,P=null,F=0,fe=0){let pe,le,Ee,Ce,we,Pe,_e,We,ut;const rt=g.isCompressedTexture?g.mipmaps[fe]:g.image;if(G!==null)pe=G.max.x-G.min.x,le=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,we=G.min.y,Pe=G.isBox3?G.min.z:0;else{const lt=Math.pow(2,-F);pe=Math.floor(rt.width*lt),le=Math.floor(rt.height*lt),g.isDataArrayTexture?Ee=rt.depth:g.isData3DTexture?Ee=Math.floor(rt.depth*lt):Ee=1,Ce=0,we=0,Pe=0}P!==null?(_e=P.x,We=P.y,ut=P.z):(_e=0,We=0,ut=0);const Ye=se.convert(R.format),vt=se.convert(R.type);let ue;R.isData3DTexture?(k.setTexture3D(R,0),ue=D.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(k.setTexture2DArray(R,0),ue=D.TEXTURE_2D_ARRAY):(k.setTexture2D(R,0),ue=D.TEXTURE_2D),f.activeTexture(D.TEXTURE0),f.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),f.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),f.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);const Bt=f.getParameter(D.UNPACK_ROW_LENGTH),Oe=f.getParameter(D.UNPACK_IMAGE_HEIGHT),Qt=f.getParameter(D.UNPACK_SKIP_PIXELS),jt=f.getParameter(D.UNPACK_SKIP_ROWS),ln=f.getParameter(D.UNPACK_SKIP_IMAGES);f.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),f.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),f.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),f.pixelStorei(D.UNPACK_SKIP_ROWS,we),f.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe);const Sn=g.isDataArrayTexture||g.isData3DTexture,je=R.isDataArrayTexture||R.isData3DTexture;if(g.isDepthTexture){const lt=Q.get(g),fn=Q.get(R),nt=Q.get(lt.__renderTarget),dn=Q.get(fn.__renderTarget);f.bindFramebuffer(D.READ_FRAMEBUFFER,nt.__webglFramebuffer),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let xn=0;xn<Ee;xn++)Sn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Q.get(g).__webglTexture,F,Pe+xn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,fe,ut+xn)),D.blitFramebuffer(Ce,we,pe,le,_e,We,pe,le,D.DEPTH_BUFFER_BIT,D.NEAREST);f.bindFramebuffer(D.READ_FRAMEBUFFER,null),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||g.isRenderTargetTexture||Q.has(g)){const lt=Q.get(g),fn=Q.get(R);f.bindFramebuffer(D.READ_FRAMEBUFFER,y),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let nt=0;nt<Ee;nt++)Sn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,lt.__webglTexture,F,Pe+nt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,lt.__webglTexture,F),je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fn.__webglTexture,fe,ut+nt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fn.__webglTexture,fe),F!==0?D.blitFramebuffer(Ce,we,pe,le,_e,We,pe,le,D.COLOR_BUFFER_BIT,D.NEAREST):je?D.copyTexSubImage3D(ue,fe,_e,We,ut+nt,Ce,we,pe,le):D.copyTexSubImage2D(ue,fe,_e,We,Ce,we,pe,le);f.bindFramebuffer(D.READ_FRAMEBUFFER,null),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else je?g.isDataTexture||g.isData3DTexture?D.texSubImage3D(ue,fe,_e,We,ut,pe,le,Ee,Ye,vt,rt.data):R.isCompressedArrayTexture?D.compressedTexSubImage3D(ue,fe,_e,We,ut,pe,le,Ee,Ye,rt.data):D.texSubImage3D(ue,fe,_e,We,ut,pe,le,Ee,Ye,vt,rt):g.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,_e,We,pe,le,Ye,vt,rt.data):g.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,_e,We,rt.width,rt.height,Ye,rt.data):D.texSubImage2D(D.TEXTURE_2D,fe,_e,We,pe,le,Ye,vt,rt);f.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),f.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Oe),f.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),f.pixelStorei(D.UNPACK_SKIP_ROWS,jt),f.pixelStorei(D.UNPACK_SKIP_IMAGES,ln),fe===0&&R.generateMipmaps&&D.generateMipmap(ue),f.unbindTexture()},this.initRenderTarget=function(g){Q.get(g).__webglFramebuffer===void 0&&k.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?k.setTextureCube(g,0):g.isData3DTexture?k.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?k.setTexture2DArray(g,0):k.setTexture2D(g,0),f.unbindTexture()},this.resetState=function(){K=0,X=0,te=null,f.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const e=this.getContext();e.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(n),e.unpackColorSpace=Ze._getUnpackColorSpace()}}function Gr(t,n){if(n===fA)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(n===da||n===Bo){let e=t.getIndex();if(e===null){const r=[],o=t.getAttribute("position");if(o!==void 0){for(let s=0;s<o.count;s++)r.push(s);t.setIndex(r),e=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=e.count-2,a=[];if(n===da)for(let r=1;r<=i;r++)a.push(e.getX(0)),a.push(e.getX(r)),a.push(e.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(a.push(e.getX(r)),a.push(e.getX(r+1)),a.push(e.getX(r+2))):(a.push(e.getX(r+2)),a.push(e.getX(r+1)),a.push(e.getX(r)));return a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),t.setIndex(a),t.clearGroups(),t}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),t}function jo(t){const n=new Map,e=new Map,i=t.clone();return Yo(t,i,function(a,r){n.set(r,a),e.set(a,r)}),i.traverse(function(a){if(!a.isSkinnedMesh)return;const r=a,o=n.get(a),s=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=s.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Yo(t,n,e){e(t,n);for(let i=0;i<t.children.length;i++)Yo(t.children[i],n.children[i],e)}class Zo extends xa{constructor(n){super(n),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Qp(e)}),this.register(function(e){return new Gp(e)}),this.register(function(e){return new Xp(e)}),this.register(function(e){return new Jp(e)}),this.register(function(e){return new jp(e)}),this.register(function(e){return new kp(e)}),this.register(function(e){return new Hp(e)}),this.register(function(e){return new Vp(e)}),this.register(function(e){return new Wp(e)}),this.register(function(e){return new Np(e)}),this.register(function(e){return new qp(e)}),this.register(function(e){return new Op(e)}),this.register(function(e){return new Kp(e)}),this.register(function(e){return new zp(e)}),this.register(function(e){return new Pp(e)}),this.register(function(e){return new Or(e,ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Or(e,ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Yp(e)})}load(n,e,i,a){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const A=hn.extractUrlBase(n);o=hn.resolveURL(A,this.path)}else o=hn.extractUrlBase(n);this.manager.itemStart(n);const s=function(A){a?a(A):console.error(A),r.manager.itemError(n),r.manager.itemEnd(n)},c=new In(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(n,function(A){try{r.parse(A,o,function(h){e(h),r.manager.itemEnd(n)},s)}catch(h){s(h)}},i,s)}setDRACOLoader(n){return this.dracoLoader=n,this}setKTX2Loader(n){return this.ktx2Loader=n,this}setMeshoptDecoder(n){return this.meshoptDecoder=n,this}register(n){return this.pluginCallbacks.indexOf(n)===-1&&this.pluginCallbacks.push(n),this}unregister(n){return this.pluginCallbacks.indexOf(n)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n),1),this}parse(n,e,i,a){let r;const o={},s={},c=new TextDecoder;if(typeof n=="string")r=JSON.parse(n);else if(n instanceof ArrayBuffer)if(c.decode(new Uint8Array(n,0,4))===$o){try{o[ye.KHR_BINARY_GLTF]=new Zp(n)}catch(p){a&&a(p);return}r=JSON.parse(o[ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(n));else r=n;if(r.asset===void 0||r.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const A=new fh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});A.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const p=this.pluginCallbacks[h](A);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[p.name]=p,o[p.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const p=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(p){case ye.KHR_MATERIALS_UNLIT:o[p]=new Fp;break;case ye.KHR_DRACO_MESH_COMPRESSION:o[p]=new $p(r,this.dracoLoader);break;case ye.KHR_TEXTURE_TRANSFORM:o[p]=new eh;break;case ye.KHR_MESH_QUANTIZATION:o[p]=new th;break;default:d.indexOf(p)>=0&&s[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}A.setExtensions(o),A.setPlugins(s),A.parse(i,a)}parseAsync(n,e){const i=this;return new Promise(function(a,r){i.parse(n,e,a,r)})}}function Up(){let t={};return{get:function(n){return t[n]},add:function(n,e){t[n]=e},remove:function(n){delete t[n]},removeAll:function(){t={}}}}function ft(t,n,e){const i=t.json.materials[n];return i.extensions&&i.extensions[e]?i.extensions[e]:null}const ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Pp{constructor(n){this.parser=n,this.name=ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const n=this.parser,e=this.parser.json.nodes||[];for(let i=0,a=e.length;i<a;i++){const r=e[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&n._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(n){const e=this.parser,i="light:"+n;let a=e.cache.get(i);if(a)return a;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[n];let A;const h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);const p=c.range!==void 0?c.range:0;switch(c.type){case"directional":A=new pA(h),A.target.position.set(0,0,-1),A.add(A.target);break;case"point":A=new uA(h),A.distance=p;break;case"spot":A=new dA(h),A.distance=p,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,A.angle=c.spot.outerConeAngle,A.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,A.target.position.set(0,0,-1),A.add(A.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return A.position.set(0,0,0),Zt(A,c),c.intensity!==void 0&&(A.intensity=c.intensity),A.name=e.createUniqueName(c.name||"light_"+n),a=Promise.resolve(A),e.cache.add(i,a),a}getDependency(n,e){if(n==="light")return this._loadLight(e)}createNodeAttachment(n){const e=this,i=this.parser,r=i.json.nodes[n],s=(r.extensions&&r.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(c){return i._getNodeRef(e.cache,s,c)})}}class Fp{constructor(){this.name=ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(n,e,i){const a=[];n.color=new Fe(1,1,1),n.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;n.color.setRGB(o[0],o[1],o[2],Nt),n.opacity=o[3]}r.baseColorTexture!==void 0&&a.push(i.assignTexture(n,"map",r.baseColorTexture,Pt))}return Promise.all(a)}}class Np{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);return i===null||i.emissiveStrength!==void 0&&(e.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class Qp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];if(i.clearcoatFactor!==void 0&&(e.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(e,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(e,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Mt(r,r)}return Promise.all(a)}}class Gp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_DISPERSION}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);return i===null||(e.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class Op{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];return i.iridescenceFactor!==void 0&&(e.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(e,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(e.iridescenceIOR=i.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(e,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(a)}}class kp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_SHEEN}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];if(e.sheenColor=new Fe(0,0,0),e.sheenRoughness=0,e.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Nt)}return i.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(e,"sheenColorMap",i.sheenColorTexture,Pt)),i.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(e,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(a)}}class Hp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];return i.transmissionFactor!==void 0&&(e.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(e,"transmissionMap",i.transmissionTexture)),Promise.all(a)}}class Vp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_VOLUME}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];e.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(e,"thicknessMap",i.thicknessTexture)),e.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return e.attenuationColor=new Fe().setRGB(r[0],r[1],r[2],Nt),Promise.all(a)}}class Wp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_IOR}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);return i===null||(e.ior=i.ior!==void 0?i.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class qp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_SPECULAR}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];e.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&a.push(this.parser.assignTexture(e,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return e.specularColor=new Fe().setRGB(r[0],r[1],r[2],Nt),i.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(e,"specularColorMap",i.specularColorTexture,Pt)),Promise.all(a)}}class zp{constructor(n){this.parser=n,this.name=ye.EXT_MATERIALS_BUMP}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];return e.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&a.push(this.parser.assignTexture(e,"bumpMap",i.bumpTexture)),Promise.all(a)}}class Kp{constructor(n){this.parser=n,this.name=ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(n){return ft(this.parser,n,this.name)!==null?rn:null}extendMaterialParams(n,e){const i=ft(this.parser,n,this.name);if(i===null)return Promise.resolve();const a=[];return i.anisotropyStrength!==void 0&&(e.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(e.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(e,"anisotropyMap",i.anisotropyTexture)),Promise.all(a)}}class Xp{constructor(n){this.parser=n,this.name=ye.KHR_TEXTURE_BASISU}loadTexture(n){const e=this.parser,i=e.json,a=i.textures[n];if(!a.extensions||!a.extensions[this.name])return null;const r=a.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(n,r.source,o)}}class Jp{constructor(n){this.parser=n,this.name=ye.EXT_TEXTURE_WEBP}loadTexture(n){const e=this.name,i=this.parser,a=i.json,r=a.textures[n];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],s=a.images[o.source];let c=i.textureLoader;if(s.uri){const A=i.options.manager.getHandler(s.uri);A!==null&&(c=A)}return i.loadTextureImage(n,o.source,c)}}class jp{constructor(n){this.parser=n,this.name=ye.EXT_TEXTURE_AVIF}loadTexture(n){const e=this.name,i=this.parser,a=i.json,r=a.textures[n];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],s=a.images[o.source];let c=i.textureLoader;if(s.uri){const A=i.options.manager.getHandler(s.uri);A!==null&&(c=A)}return i.loadTextureImage(n,o.source,c)}}class Or{constructor(n,e){this.name=e,this.parser=n}loadBufferView(n){const e=this.parser.json,i=e.bufferViews[n];if(i.extensions&&i.extensions[this.name]){const a=i.extensions[this.name],r=this.parser.getDependency("buffer",a.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(s){const c=a.byteOffset||0,A=a.byteLength||0,h=a.count,p=a.byteStride,d=new Uint8Array(s,c,A);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,p,d,a.mode,a.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*p);return o.decodeGltfBuffer(new Uint8Array(m),h,p,d,a.mode,a.filter),m})})}else return null}}class Yp{constructor(n){this.name=ye.EXT_MESH_GPU_INSTANCING,this.parser=n}createNodeMesh(n){const e=this.parser.json,i=e.nodes[n];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const a=e.meshes[i.mesh];for(const A of a.primitives)if(A.mode!==Gt.TRIANGLES&&A.mode!==Gt.TRIANGLE_STRIP&&A.mode!==Gt.TRIANGLE_FAN&&A.mode!==void 0)return null;const o=i.extensions[this.name].attributes,s=[],c={};for(const A in o)s.push(this.parser.getDependency("accessor",o[A]).then(h=>(c[A]=h,c[A])));return s.length<1?null:(s.push(this.parser.createNodeMesh(n)),Promise.all(s).then(A=>{const h=A.pop(),p=h.isGroup?h.children:[h],d=A[0].count,m=[];for(const b of p){const M=new Xt,u=new he,l=new it,C=new he(1,1,1),B=new To(b.geometry,b.material,d);for(let I=0;I<d;I++)c.TRANSLATION&&u.fromBufferAttribute(c.TRANSLATION,I),c.ROTATION&&l.fromBufferAttribute(c.ROTATION,I),c.SCALE&&C.fromBufferAttribute(c.SCALE,I),B.setMatrixAt(I,M.compose(u,l,C));let _=null;for(const I in c)if(I==="_COLOR_0"){const v=c[I];B.instanceColor=new fr(v.array,v.itemSize,v.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(_===null){const T=B.geometry;_=new An,_.name=T.name;for(const E in T.attributes)_.setAttribute(E,T.attributes[E]);for(const E in T.morphAttributes)_.morphAttributes[E]=T.morphAttributes[E];T.index!==null&&_.setIndex(T.index),_.morphTargetsRelative=T.morphTargetsRelative;for(const E of T.groups)_.addGroup(E.start,E.count,E.materialIndex);T.boundingBox!==null&&(_.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(_.boundingSphere=T.boundingSphere.clone()),_.drawRange.start=T.drawRange.start,_.drawRange.count=T.drawRange.count,_.userData=Object.assign({},T.userData),B.geometry=_}const v=c[I];_.setAttribute(I,new fr(v.array,v.itemSize,v.normalized))}Ro.prototype.copy.call(B,b),this.parser.assignFinalMaterial(B),m.push(B)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const $o="glTF",Wn=12,kr={JSON:1313821514,BIN:5130562};class Zp{constructor(n){this.name=ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(n,0,Wn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(n.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==$o)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const a=this.header.length-Wn,r=new DataView(n,Wn);let o=0;for(;o<a;){const s=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===kr.JSON){const A=new Uint8Array(n,Wn+o,s);this.content=i.decode(A)}else if(c===kr.BIN){const A=Wn+o;this.body=n.slice(A,A+s)}o+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $p{constructor(n,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ye.KHR_DRACO_MESH_COMPRESSION,this.json=n,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(n,e){const i=this.json,a=this.dracoLoader,r=n.extensions[this.name].bufferView,o=n.extensions[this.name].attributes,s={},c={},A={};for(const h in o){const p=ga[h]||h.toLowerCase();s[p]=o[h]}for(const h in n.attributes){const p=ga[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[n.attributes[h]],m=Pn[d.componentType];A[p]=m.name,c[p]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(p,d){a.decodeDracoFile(h,function(m){for(const b in m.attributes){const M=m.attributes[b],u=c[b];u!==void 0&&(M.normalized=u)}p(m)},s,A,Nt,d)})})}}class eh{constructor(){this.name=ye.KHR_TEXTURE_TRANSFORM}extendTexture(n,e){if((e.texCoord===void 0||e.texCoord===n.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return n;if(n=n.clone(),e.texCoord!==void 0&&(n.channel=e.texCoord),e.offset!==void 0&&n.offset.fromArray(e.offset),e.rotation!==void 0&&(n.rotation=e.rotation),e.scale!==void 0&&n.repeat.fromArray(e.scale),e.rotation!==void 0){const i=Math.cos(n.rotation),a=Math.sin(n.rotation);n.matrix.set(n.repeat.x*i,n.repeat.y*a,n.offset.x,-n.repeat.x*a,n.repeat.y*i,n.offset.y,0,0,1),n.matrixAutoUpdate=!1}return n.needsUpdate=!0,n}}class th{constructor(){this.name=ye.KHR_MESH_QUANTIZATION}}class es extends CA{constructor(n,e,i,a){super(n,e,i,a)}copySampleValue_(n){const e=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=n*a*3+a;for(let o=0;o!==a;o++)e[o]=i[r+o];return e}interpolate_(n,e,i,a){const r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=s*2,A=s*3,h=a-e,p=(i-e)/h,d=p*p,m=d*p,b=n*A,M=b-A,u=-2*m+3*d,l=m-d,C=1-u,B=l-d+p;for(let _=0;_!==s;_++){const I=o[M+_+s],v=o[M+_+c]*h,T=o[b+_+s],E=o[b+_]*h;r[_]=C*I+B*v+u*T+l*E}return r}}const nh=new it;class ih extends es{interpolate_(n,e,i,a){const r=super.interpolate_(n,e,i,a);return nh.fromArray(r).normalize().toArray(r),r}}const Gt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Pn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hr={9728:qt,9729:gt,9984:_a,9985:fi,9986:zn,9987:en},Vr={33071:hi,33648:ro,10497:Zn},Hi={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ga={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ah={CUBICSPLINE:void 0,LINEAR:Qo,STEP:IA},Vi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rh(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),t.DefaultMaterial}function En(t,n,e){for(const i in e.extensions)t[i]===void 0&&(n.userData.gltfExtensions=n.userData.gltfExtensions||{},n.userData.gltfExtensions[i]=e.extensions[i])}function Zt(t,n){n.extras!==void 0&&(typeof n.extras=="object"?Object.assign(t.userData,n.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+n.extras))}function oh(t,n,e){let i=!1,a=!1,r=!1;for(let A=0,h=n.length;A<h;A++){const p=n[A];if(p.POSITION!==void 0&&(i=!0),p.NORMAL!==void 0&&(a=!0),p.COLOR_0!==void 0&&(r=!0),i&&a&&r)break}if(!i&&!a&&!r)return Promise.resolve(t);const o=[],s=[],c=[];for(let A=0,h=n.length;A<h;A++){const p=n[A];if(i){const d=p.POSITION!==void 0?e.getDependency("accessor",p.POSITION):t.attributes.position;o.push(d)}if(a){const d=p.NORMAL!==void 0?e.getDependency("accessor",p.NORMAL):t.attributes.normal;s.push(d)}if(r){const d=p.COLOR_0!==void 0?e.getDependency("accessor",p.COLOR_0):t.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(A){const h=A[0],p=A[1],d=A[2];return i&&(t.morphAttributes.position=h),a&&(t.morphAttributes.normal=p),r&&(t.morphAttributes.color=d),t.morphTargetsRelative=!0,t})}function sh(t,n){if(t.updateMorphTargets(),n.weights!==void 0)for(let e=0,i=n.weights.length;e<i;e++)t.morphTargetInfluences[e]=n.weights[e];if(n.extras&&Array.isArray(n.extras.targetNames)){const e=n.extras.targetNames;if(t.morphTargetInfluences.length===e.length){t.morphTargetDictionary={};for(let i=0,a=e.length;i<a;i++)t.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ch(t){let n;const e=t.extensions&&t.extensions[ye.KHR_DRACO_MESH_COMPRESSION];if(e?n="draco:"+e.bufferView+":"+e.indices+":"+Wi(e.attributes):n=t.indices+":"+Wi(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,a=t.targets.length;i<a;i++)n+=":"+Wi(t.targets[i]);return n}function Wi(t){let n="";const e=Object.keys(t).sort();for(let i=0,a=e.length;i<a;i++)n+=e[i]+":"+t[e[i]]+";";return n}function ma(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ah(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lh=new Xt;class fh{constructor(n={},e={}){this.json=n,this.extensions={},this.plugins={},this.options=e,this.cache=new Up,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,a=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;const c=s.match(/Version\/(\d+)/);a=i&&c?parseInt(c[1],10):-1,r=s.indexOf("Firefox")>-1,o=r?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&a<17||r&&o<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new hA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new In(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(n){this.extensions=n}setPlugins(n){this.plugins=n}parse(n,e){const i=this,a=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const s={scene:o[0][a.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:a.asset,parser:i,userData:{}};return En(r,s,a),Zt(s,a),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(s)})).then(function(){for(const c of s.scenes)c.updateMatrixWorld();n(s)})}).catch(e)}_markDefs(){const n=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let a=0,r=e.length;a<r;a++){const o=e[a].joints;for(let s=0,c=o.length;s<c;s++)n[o[s]].isBone=!0}for(let a=0,r=n.length;a<r;a++){const o=n[a];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(n,e){e!==void 0&&(n.refs[e]===void 0&&(n.refs[e]=n.uses[e]=0),n.refs[e]++)}_getNodeRef(n,e,i){if(n.refs[e]<=1)return i;const a=i.clone(),r=(o,s)=>{const c=this.associations.get(o);c!=null&&this.associations.set(s,c);for(const[A,h]of o.children.entries())r(h,s.children[A])};return r(i,a),a.name+="_instance_"+n.uses[e]++,a}_invokeOne(n){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const a=n(e[i]);if(a)return a}return null}_invokeAll(n){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let a=0;a<e.length;a++){const r=n(e[a]);r&&i.push(r)}return i}getDependency(n,e){const i=n+":"+e;let a=this.cache.get(i);if(!a){switch(n){case"scene":a=this.loadScene(e);break;case"node":a=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":a=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":a=this.loadAccessor(e);break;case"bufferView":a=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":a=this.loadBuffer(e);break;case"material":a=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":a=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":a=this.loadSkin(e);break;case"animation":a=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":a=this.loadCamera(e);break;default:if(a=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(n,e)}),!a)throw new Error("Unknown type: "+n);break}this.cache.add(i,a)}return a}getDependencies(n){let e=this.cache.get(n);if(!e){const i=this,a=this.json[n+(n==="mesh"?"es":"s")]||[];e=Promise.all(a.map(function(r,o){return i.getDependency(n,o)})),this.cache.add(n,e)}return e}loadBuffer(n){const e=this.json.buffers[n],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&n===0)return Promise.resolve(this.extensions[ye.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(r,o){i.load(hn.resolveURL(e.uri,a.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(n){const e=this.json.bufferViews[n];return this.getDependency("buffer",e.buffer).then(function(i){const a=e.byteLength||0,r=e.byteOffset||0;return i.slice(r,r+a)})}loadAccessor(n){const e=this,i=this.json,a=this.json.accessors[n];if(a.bufferView===void 0&&a.sparse===void 0){const o=Hi[a.type],s=Pn[a.componentType],c=a.normalized===!0,A=new s(a.count*o);return Promise.resolve(new an(A,o,c))}const r=[];return a.bufferView!==void 0?r.push(this.getDependency("bufferView",a.bufferView)):r.push(null),a.sparse!==void 0&&(r.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(r).then(function(o){const s=o[0],c=Hi[a.type],A=Pn[a.componentType],h=A.BYTES_PER_ELEMENT,p=h*c,d=a.byteOffset||0,m=a.bufferView!==void 0?i.bufferViews[a.bufferView].byteStride:void 0,b=a.normalized===!0;let M,u;if(m&&m!==p){const l=Math.floor(d/m),C="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+l+":"+a.count;let B=e.cache.get(C);B||(M=new A(s,l*m,a.count*m/h),B=new Do(M,m/h),e.cache.add(C,B)),u=new Go(B,c,d%m/h,b)}else s===null?M=new A(a.count*c):M=new A(s,d,a.count*c),u=new an(M,c,b);if(a.sparse!==void 0){const l=Hi.SCALAR,C=Pn[a.sparse.indices.componentType],B=a.sparse.indices.byteOffset||0,_=a.sparse.values.byteOffset||0,I=new C(o[1],B,a.sparse.count*l),v=new A(o[2],_,a.sparse.count*c);s!==null&&(u=new an(u.array.slice(),u.itemSize,u.normalized)),u.normalized=!1;for(let T=0,E=I.length;T<E;T++){const x=I[T];if(u.setX(x,v[T*c]),c>=2&&u.setY(x,v[T*c+1]),c>=3&&u.setZ(x,v[T*c+2]),c>=4&&u.setW(x,v[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}u.normalized=b}return u})}loadTexture(n){const e=this.json,i=this.options,r=e.textures[n].source,o=e.images[r];let s=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(s=c)}return this.loadTextureImage(n,r,s)}loadTextureImage(n,e,i){const a=this,r=this.json,o=r.textures[n],s=r.images[e],c=(s.uri||s.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const A=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=o.name||s.name||"",h.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(h.name=s.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Hr[d.magFilter]||gt,h.minFilter=Hr[d.minFilter]||en,h.wrapS=Vr[d.wrapS]||Zn,h.wrapT=Vr[d.wrapT]||Zn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==gt,a.associations.set(h,{textures:n}),h}).catch(function(){return null});return this.textureCache[c]=A,A}loadImageSource(n,e){const i=this,a=this.json,r=this.options;if(this.sourceCache[n]!==void 0)return this.sourceCache[n].then(p=>p.clone());const o=a.images[n],s=self.URL||self.webkitURL;let c=o.uri||"",A=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(p){A=!0;const d=new Blob([p],{type:o.mimeType});return c=s.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+n+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(p){return new Promise(function(d,m){let b=d;e.isImageBitmapLoader===!0&&(b=function(M){const u=new fa(M);u.needsUpdate=!0,d(u)}),e.load(hn.resolveURL(p,r.path),b,void 0,m)})}).then(function(p){return A===!0&&s.revokeObjectURL(c),Zt(p,o),p.userData.mimeType=o.mimeType||Ah(o.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),p});return this.sourceCache[n]=h,h}assignTexture(n,e,i,a){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[ye.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[ye.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const c=r.associations.get(o);o=r.extensions[ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,s),r.associations.set(o,c)}}return a!==void 0&&(o.colorSpace=a),n[e]=o,o})}assignFinalMaterial(n){const e=n.geometry;let i=n.material;const a=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(n.isPoints){const s="PointsMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new Lo,Ui.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(s,c)),i=c}else if(n.isLine){const s="LineBasicMaterial:"+i.uuid;let c=this.cache.get(s);c||(c=new yo,Ui.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(s,c)),i=c}if(a||r||o){let s="ClonedMaterial:"+i.uuid+":";a&&(s+="derivative-tangents:"),r&&(s+="vertex-colors:"),o&&(s+="flat-shading:");let c=this.cache.get(s);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),a&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(s,c),this.associations.set(c,this.associations.get(i))),i=c}n.material=i}getMaterialType(){return Uo}loadMaterial(n){const e=this,i=this.json,a=this.extensions,r=i.materials[n];let o;const s={},c=r.extensions||{},A=[];if(c[ye.KHR_MATERIALS_UNLIT]){const p=a[ye.KHR_MATERIALS_UNLIT];o=p.getMaterialType(),A.push(p.extendParams(s,r,e))}else{const p=r.pbrMetallicRoughness||{};if(s.color=new Fe(1,1,1),s.opacity=1,Array.isArray(p.baseColorFactor)){const d=p.baseColorFactor;s.color.setRGB(d[0],d[1],d[2],Nt),s.opacity=d[3]}p.baseColorTexture!==void 0&&A.push(e.assignTexture(s,"map",p.baseColorTexture,Pt)),s.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,s.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(A.push(e.assignTexture(s,"metalnessMap",p.metallicRoughnessTexture)),A.push(e.assignTexture(s,"roughnessMap",p.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(n)}),A.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(n,s)})))}r.doubleSided===!0&&(s.side=kt);const h=r.alphaMode||Vi.OPAQUE;if(h===Vi.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,h===Vi.MASK&&(s.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vt&&(A.push(e.assignTexture(s,"normalMap",r.normalTexture)),s.normalScale=new Mt(1,1),r.normalTexture.scale!==void 0)){const p=r.normalTexture.scale;s.normalScale.set(p,p)}if(r.occlusionTexture!==void 0&&o!==Vt&&(A.push(e.assignTexture(s,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vt){const p=r.emissiveFactor;s.emissive=new Fe().setRGB(p[0],p[1],p[2],Nt)}return r.emissiveTexture!==void 0&&o!==Vt&&A.push(e.assignTexture(s,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(A).then(function(){const p=new o(s);return r.name&&(p.name=r.name),Zt(p,r),e.associations.set(p,{materials:n}),r.extensions&&En(a,p,r),p})}createUniqueName(n){const e=gA.sanitizeNodeName(n||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(n){const e=this,i=this.extensions,a=this.primitiveCache;function r(s){return i[ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,e).then(function(c){return Wr(c,s,e)})}const o=[];for(let s=0,c=n.length;s<c;s++){const A=n[s],h=ch(A),p=a[h];if(p)o.push(p.promise);else{let d;A.extensions&&A.extensions[ye.KHR_DRACO_MESH_COMPRESSION]?d=r(A):d=Wr(new An,A,e),A.mode===Gt.TRIANGLE_STRIP?d=d.then(m=>Gr(m,Bo)):A.mode===Gt.TRIANGLE_FAN&&(d=d.then(m=>Gr(m,da))),a[h]={primitive:A,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(n){const e=this,i=this.json,a=this.extensions,r=i.meshes[n],o=r.primitives,s=[];for(let c=0,A=o.length;c<A;c++){const h=o[c].material===void 0?rh(this.cache):this.getDependency("material",o[c].material);s.push(h)}return s.push(e.loadGeometries(o)),Promise.all(s).then(async function(c){const A=c.slice(0,c.length-1),h=c[c.length-1],p=[];for(let m=0,b=h.length;m<b;m++){const M=h[m],u=o[m];let l;const C=A[m];if(u.mode===Gt.TRIANGLES||u.mode===Gt.TRIANGLE_STRIP||u.mode===Gt.TRIANGLE_FAN||u.mode===void 0){const B=r.isSkinnedMesh===!0,_=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");B&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),l=B&&_?new Ma(M,C):new He(M,C),l.isSkinnedMesh===!0&&l.normalizeSkinWeights()}else if(u.mode===Gt.LINES)l=new Po(M,C);else if(u.mode===Gt.LINE_STRIP)l=new mA(M,C);else if(u.mode===Gt.LINE_LOOP)l=new EA(M,C);else if(u.mode===Gt.POINTS)l=new Fo(M,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(l.geometry.morphAttributes).length>0&&sh(l,r),l.name=e.createUniqueName(r.name||"mesh_"+n),Zt(l,r),u.extensions&&En(a,l,u),e.assignFinalMaterial(l),p.push(l)}for(let m=0,b=p.length;m<b;m++)e.associations.set(p[m],{meshes:n,primitives:m});if(p.length===1)return r.extensions&&En(a,p[0],r),p[0];const d=new qe;r.extensions&&En(a,d,r),e.associations.set(d,{meshes:n});for(let m=0,b=p.length;m<b;m++)d.add(p[m]);return d})}loadCamera(n){let e;const i=this.json.cameras[n],a=i[i.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Jn(bn.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):i.type==="orthographic"&&(e=new Ca(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Zt(e,i),Promise.resolve(e)}loadSkin(n){const e=this.json.skins[n],i=[];for(let a=0,r=e.joints.length;a<r;a++)i.push(this._loadNodeShallow(e.joints[a]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(a){const r=a.pop(),o=a,s=[],c=[];for(let A=0,h=o.length;A<h;A++){const p=o[A];if(p){s.push(p);const d=new Xt;r!==null&&d.fromArray(r.array,A*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[A])}return new _A(s,c)})}loadAnimation(n){const e=this.json,i=this,a=e.animations[n],r=a.name?a.name:"animation_"+n,o=[],s=[],c=[],A=[],h=[];for(let p=0,d=a.channels.length;p<d;p++){const m=a.channels[p],b=a.samplers[m.sampler],M=m.target,u=M.node,l=a.parameters!==void 0?a.parameters[b.input]:b.input,C=a.parameters!==void 0?a.parameters[b.output]:b.output;M.node!==void 0&&(o.push(this.getDependency("node",u)),s.push(this.getDependency("accessor",l)),c.push(this.getDependency("accessor",C)),A.push(b),h.push(M))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(A),Promise.all(h)]).then(function(p){const d=p[0],m=p[1],b=p[2],M=p[3],u=p[4],l=[];for(let B=0,_=d.length;B<_;B++){const I=d[B],v=m[B],T=b[B],E=M[B],x=u[B];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const L=i._createAnimationTracks(I,v,T,E,x);if(L)for(let N=0;N<L.length;N++)l.push(L[N])}const C=new No(r,void 0,l);return Zt(C,a),C})}createNodeMesh(n){const e=this.json,i=this,a=e.nodes[n];return a.mesh===void 0?null:i.getDependency("mesh",a.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,a.mesh,r);return a.weights!==void 0&&o.traverse(function(s){if(s.isMesh)for(let c=0,A=a.weights.length;c<A;c++)s.morphTargetInfluences[c]=a.weights[c]}),o})}loadNode(n){const e=this.json,i=this,a=e.nodes[n],r=i._loadNodeShallow(n),o=[],s=a.children||[];for(let A=0,h=s.length;A<h;A++)o.push(i.getDependency("node",s[A]));const c=a.skin===void 0?Promise.resolve(null):i.getDependency("skin",a.skin);return Promise.all([r,Promise.all(o),c]).then(function(A){const h=A[0],p=A[1],d=A[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,lh)});for(let m=0,b=p.length;m<b;m++)h.add(p[m]);if(h.userData.pivot!==void 0&&p.length>0){const m=h.userData.pivot,b=p[0];h.pivot=new he().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(n){const e=this.json,i=this.extensions,a=this;if(this.nodeCache[n]!==void 0)return this.nodeCache[n];const r=e.nodes[n],o=r.name?a.createUniqueName(r.name):"",s=[],c=a._invokeOne(function(A){return A.createNodeMesh&&A.createNodeMesh(n)});return c&&s.push(c),r.camera!==void 0&&s.push(a.getDependency("camera",r.camera).then(function(A){return a._getNodeRef(a.cameraCache,r.camera,A)})),a._invokeAll(function(A){return A.createNodeAttachment&&A.createNodeAttachment(n)}).forEach(function(A){s.push(A)}),this.nodeCache[n]=Promise.all(s).then(function(A){let h;if(r.isBone===!0?h=new bA:A.length>1?h=new qe:A.length===1?h=A[0]:h=new Ro,h!==A[0])for(let p=0,d=A.length;p<d;p++)h.add(A[p]);if(r.name&&(h.userData.name=r.name,h.name=o),Zt(h,r),r.extensions&&En(i,h,r),r.matrix!==void 0){const p=new Xt;p.fromArray(r.matrix),h.applyMatrix4(p)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!a.associations.has(h))a.associations.set(h,{});else if(r.mesh!==void 0&&a.meshCache.refs[r.mesh]>1){const p=a.associations.get(h);a.associations.set(h,{...p})}return a.associations.get(h).nodes=n,h}),this.nodeCache[n]}loadScene(n){const e=this.extensions,i=this.json.scenes[n],a=this,r=new qe;i.name&&(r.name=a.createUniqueName(i.name)),Zt(r,i),i.extensions&&En(e,r,i);const o=i.nodes||[],s=[];for(let c=0,A=o.length;c<A;c++)s.push(a.getDependency("node",o[c]));return Promise.all(s).then(function(c){for(let h=0,p=c.length;h<p;h++){const d=c[h];d.parent!==null?r.add(jo(d)):r.add(d)}const A=h=>{const p=new Map;for(const[d,m]of a.associations)(d instanceof Ui||d instanceof fa)&&p.set(d,m);return h.traverse(d=>{const m=a.associations.get(d);m!=null&&p.set(d,m)}),p};return a.associations=A(r),r})}_createAnimationTracks(n,e,i,a,r){const o=[],s=n.name?n.name:n.uuid,c=[];function A(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}un[r.path]===un.weights?(A(n),n.isGroup&&n.children.forEach(A)):c.push(s);let h;switch(un[r.path]){case un.weights:h=ur;break;case un.rotation:h=pr;break;case un.translation:case un.scale:h=dr;break;default:i.itemSize===1?h=ur:h=dr;break}const p=a.interpolation!==void 0?ah[a.interpolation]:Qo,d=this._getArrayFromAccessor(i);for(let m=0,b=c.length;m<b;m++){const M=new h(c[m]+"."+un[r.path],e.array,d,p);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),o.push(M)}return o}_getArrayFromAccessor(n){let e=n.array;if(n.normalized){const i=ma(e.constructor),a=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)a[r]=e[r]*i;e=a}return e}_createCubicSplineTrackInterpolant(n){n.createInterpolant=function(i){const a=this instanceof pr?ih:es;return new a(this.times,this.values,this.getValueSize()/3,i)},n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dh(t,n,e){const i=n.attributes,a=new Un;if(i.POSITION!==void 0){const s=e.json.accessors[i.POSITION],c=s.min,A=s.max;if(c!==void 0&&A!==void 0){if(a.set(new he(c[0],c[1],c[2]),new he(A[0],A[1],A[2])),s.normalized){const h=ma(Pn[s.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=n.targets;if(r!==void 0){const s=new he,c=new he;for(let A=0,h=r.length;A<h;A++){const p=r[A];if(p.POSITION!==void 0){const d=e.json.accessors[p.POSITION],m=d.min,b=d.max;if(m!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(b[2]))),d.normalized){const M=ma(Pn[d.componentType]);c.multiplyScalar(M)}s.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(s)}t.boundingBox=a;const o=new vA;a.getCenter(o.center),o.radius=a.min.distanceTo(a.max)/2,t.boundingSphere=o}function Wr(t,n,e){const i=n.attributes,a=[];function r(o,s){return e.getDependency("accessor",o).then(function(c){t.setAttribute(s,c)})}for(const o in i){const s=ga[o]||o.toLowerCase();s in t.attributes||a.push(r(i[o],s))}if(n.indices!==void 0&&!t.index){const o=e.getDependency("accessor",n.indices).then(function(s){t.setIndex(s)});a.push(o)}return Ze.workingColorSpace!==Nt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Zt(t,n),dh(t,n,e),Promise.all(a).then(function(){return n.targets!==void 0?oh(t,n.targets,e):t})}const qi=new WeakMap,uh=new URL("/kidsney-demo/app-next/assets/draco_decoder-C32yEggz.wasm",import.meta.url).toString(),ph=new URL("/kidsney-demo/app-next/assets/draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).toString(),hh=new URL("/kidsney-demo/app-next/assets/draco_decoder-fzg4nYZr.js",import.meta.url).toString();new URL("/kidsney-demo/app-next/assets/draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).toString(),new URL("/kidsney-demo/app-next/assets/draco_decoder-Z1_iN-Ht.wasm",import.meta.url).toString();class ts extends xa{constructor(n){super(n),this.decoderPaths={js:ph,wasm:uh,dep_js:hh},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(n){const{decoderPaths:e}=this;return typeof n=="object"?(e.js=n.js,e.wasm=n.wasm,e.dep_js=null):(e.js=hn.resolveURL("draco_wasm_wrapper.js",n),e.wasm=hn.resolveURL("draco_decoder.wasm",n),e.dep_js=hn.resolveURL("draco_decoder.js",n)),this}setDecoderConfig(n){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=n,this}setWorkerLimit(n){return this.workerLimit=n,this}load(n,e,i,a){const r=new In(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(n,o=>{this.parse(o,e,a)},i,a)}parse(n,e,i=()=>{}){this.decodeDracoFile(n,e,null,null,Pt,i).catch(i)}decodeDracoFile(n,e,i,a,r=Nt,o=()=>{}){const s={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:a||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(n,s).then(e).catch(o)}decodeGeometry(n,e){const i=JSON.stringify(e);if(qi.has(n)){const c=qi.get(n);if(c.key===i)return c.promise;if(n.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let a;const r=this.workerNextTaskID++,o=n.byteLength,s=this._getWorker(r,o).then(c=>(a=c,new Promise((A,h)=>{a._callbacks[r]={resolve:A,reject:h},a.postMessage({type:"decode",id:r,taskConfig:e,buffer:n},[n])}))).then(c=>this._createGeometry(c.geometry));return s.catch(()=>!0).then(()=>{a&&r&&this._releaseTask(a,r)}),qi.set(n,{key:i,promise:s}),s}_createGeometry(n){const e=new An;n.index&&e.setIndex(new an(n.index.array,1));for(let i=0;i<n.attributes.length;i++){const{name:a,array:r,itemSize:o,stride:s,vertexColorSpace:c}=n.attributes[i];let A;if(o===s)A=new an(r,o);else{const h=new Do(r,s);A=new Go(h,o,0)}a==="color"&&(this._assignVertexColorSpace(A,c),A.normalized=!(r instanceof Float32Array)),e.setAttribute(a,A)}return e}_assignVertexColorSpace(n,e){if(e!==Pt)return;const i=new Fe;for(let a=0,r=n.count;a<r;a++)i.fromBufferAttribute(n,a),Ze.colorSpaceToWorking(i,Pt),n.setXYZ(a,i.r,i.g,i.b)}_loadLibrary(n,e){const i=new In(this.manager);return i.setResponseType(e),i.setWithCredentials(this.withCredentials),new Promise((a,r)=>{i.load(n,a,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const n=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[],{decoderPaths:i}=this;if(n){if(i.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");e.push(this._loadLibrary(i.dep_js,"text"))}else e.push(this._loadLibrary(i.js,"text")),e.push(this._loadLibrary(i.wasm,"arraybuffer"));return this.decoderPending=Promise.all(e).then(a=>{const r=a[0];n||(this.decoderConfig.wasmBinary=a[1]);const o=gh.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(n,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const a=new Worker(this.workerSourceURL);a._callbacks={},a._taskCosts={},a._taskLoad=0,a.postMessage({type:"init",decoderConfig:this.decoderConfig}),a.onmessage=function(r){const o=r.data;switch(o.type){case"decode":a._callbacks[o.id].resolve(o);break;case"error":a._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(a)}else this.workerPool.sort(function(a,r){return a._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[n]=e,i._taskLoad+=e,i})}_releaseTask(n,e){n._taskLoad-=n._taskCosts[e],delete n._callbacks[e],delete n._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(n=>n._taskLoad))}dispose(){for(let n=0;n<this.workerPool.length;++n)this.workerPool[n].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function gh(){let t,n;onmessage=function(o){const s=o.data;switch(s.type){case"init":t=s.decoderConfig,n=new Promise(function(h){t.onModuleLoaded=function(p){h({draco:p})},DracoDecoderModule(t)});break;case"decode":const c=s.buffer,A=s.taskConfig;n.then(h=>{const p=h.draco,d=new p.Decoder;try{const m=e(p,d,new Int8Array(c),A),b=m.attributes.map(M=>M.array.buffer);m.index&&b.push(m.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:m},b)}catch(m){console.error(m),self.postMessage({type:"error",id:s.id,error:m.message})}finally{p.destroy(d)}});break}};function e(o,s,c,A){const h=A.attributeIDs,p=A.attributeTypes;let d,m;const b=s.GetEncodedGeometryType(c);if(b===o.TRIANGULAR_MESH)d=new o.Mesh,m=s.DecodeArrayToMesh(c,c.byteLength,d);else if(b===o.POINT_CLOUD)d=new o.PointCloud,m=s.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const M={index:null,attributes:[]};for(const u in h){const l=self[p[u]];let C,B;if(A.useUniqueIDs)B=h[u],C=s.GetAttributeByUniqueId(d,B);else{if(B=s.GetAttributeId(d,o[h[u]]),B===-1)continue;C=s.GetAttribute(d,B)}const _=a(o,s,d,u,l,C);u==="color"&&(_.vertexColorSpace=A.vertexColorSpace),M.attributes.push(_)}return b===o.TRIANGULAR_MESH&&(M.index=i(o,s,d)),o.destroy(d),M}function i(o,s,c){const h=c.num_faces()*3,p=h*4,d=o._malloc(p);s.GetTrianglesUInt32Array(c,p,d);const m=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:m,itemSize:1}}function a(o,s,c,A,h,p){const d=c.num_points(),m=p.num_components(),b=r(o,h),M=m*h.BYTES_PER_ELEMENT,u=Math.ceil(M/4)*4,l=u/h.BYTES_PER_ELEMENT,C=d*M,B=d*u,_=o._malloc(C);s.GetAttributeDataArrayForAllPoints(c,p,b,C,_);const I=new h(o.HEAPF32.buffer,_,C/h.BYTES_PER_ELEMENT);let v;if(M===u)v=I.slice();else{v=new h(B/h.BYTES_PER_ELEMENT);let T=0;for(let E=0,x=I.length;E<x;E++){for(let L=0;L<m;L++)v[T+L]=I[E*m+L];T+=l}}return o._free(_),{name:A,count:d,itemSize:m,array:v,stride:l}}function r(o,s){switch(s){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var mh=(function(){var t="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",n="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var a=WebAssembly.validate(e)?s(n):s(t),r,o=WebAssembly.instantiate(a,{}).then(function(l){r=l.instance,r.exports.__wasm_call_ctors()});function s(l){for(var C=new Uint8Array(l.length),B=0;B<l.length;++B){var _=l.charCodeAt(B);C[B]=_>96?_-97:_>64?_-39:_+4}for(var I=0,B=0;B<l.length;++B)C[I++]=C[B]<60?i[C[B]]:(C[B]-60)*64+C[++B];return C.buffer.slice(0,I)}function c(l,C,B,_,I,v,T){var E=l.exports.sbrk,x=_+3&-4,L=E(x*I),N=E(v.length),O=new Uint8Array(l.exports.memory.buffer);O.set(v,N);var q=C(L,_,I,N,v.length);if(q==0&&T&&T(L,x,I),B.set(O.subarray(L,L+_*I)),E(L-E(0)),q!=0)throw new Error("Malformed buffer data: "+q)}var A={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},p=[],d=0;function m(l){var C={object:new Worker(l),pending:0,requests:{}};return C.object.onmessage=function(B){var _=B.data;C.pending-=_.count,C.requests[_.id][_.action](_.value),delete C.requests[_.id]},C}function b(l){for(var C="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+u.name+";"+c.toString()+u.toString(),B=new Blob([C],{type:"text/javascript"}),_=URL.createObjectURL(B),I=p.length;I<l;++I)p[I]=m(_);for(var I=l;I<p.length;++I)p[I].object.postMessage({});p.length=l,URL.revokeObjectURL(_)}function M(l,C,B,_,I){for(var v=p[0],T=1;T<p.length;++T)p[T].pending<v.pending&&(v=p[T]);return new Promise(function(E,x){var L=new Uint8Array(B),N=++d;v.pending+=l,v.requests[N]={resolve:E,reject:x},v.object.postMessage({id:N,count:l,size:C,source:L,mode:_,filter:I},[L.buffer])})}function u(l){var C=l.data;self.ready.then(function(B){if(!C.id)return self.close();try{var _=new Uint8Array(C.count*C.size);c(B,B.exports[C.mode],_,C.count,C.size,C.source,B.exports[C.filter]),self.postMessage({id:C.id,count:C.count,action:"resolve",value:_},[_.buffer])}catch(I){self.postMessage({id:C.id,count:C.count,action:"reject",value:I})}})}return{ready:o,supported:!0,useWorkers:function(l){b(l)},decodeVertexBuffer:function(l,C,B,_,I){c(r,r.exports.meshopt_decodeVertexBuffer,l,C,B,_,r.exports[A[I]])},decodeIndexBuffer:function(l,C,B,_){c(r,r.exports.meshopt_decodeIndexBuffer,l,C,B,_)},decodeIndexSequence:function(l,C,B,_){c(r,r.exports.meshopt_decodeIndexSequence,l,C,B,_)},decodeGltfBuffer:function(l,C,B,_,I,v){c(r,r.exports[h[I]],l,C,B,_,r.exports[A[v]])},decodeGltfBufferAsync:function(l,C,B,_,I){return p.length>0?M(l,C,B,h[_],A[I]):o.then(function(){var v=new Uint8Array(l*C);return c(r,r.exports[h[_]],v,l,C,B,r.exports[A[I]]),v})}}})();class Eh{constructor(n=4){this.pool=n,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(n){if(!this.workers[n]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,n)),this.workers[n]=e}}_getIdleWorker(){for(let n=0;n<this.pool;n++)if(!(this.workerStatus&1<<n))return n;return-1}_onMessage(n,e){const i=this.workersResolve[n];if(i&&i(e),this.queue.length){const{resolve:a,msg:r,transfer:o}=this.queue.shift();this.workersResolve[n]=a,this.workers[n].postMessage(r,o)}else this.workerStatus^=1<<n}setWorkerCreator(n){this.workerCreator=n}setWorkerLimit(n){this.pool=n}postMessage(n,e){return new Promise(i=>{const a=this._getIdleWorker();a!==-1?(this._initWorker(a),this.workerStatus|=1<<a,this.workersResolve[a]=i,this.workers[a].postMessage(n,e)):this.queue.push({resolve:i,msg:n,transfer:e})})}dispose(){this.workers.forEach(n=>n.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const _h=0,qr=2,bh=1,zr=2,Ih=0,Ch=1,vh=10,Sh=0,ns=9,is=15,as=16,rs=22,os=37,ss=43,cs=76,As=83,Ba=91,ls=97,fs=100,ds=103,us=109,ps=122,hs=123,gs=131,ms=132,Es=133,_s=134,bs=137,Is=138,Cs=139,vs=140,Ss=141,xs=142,Ms=145,Bs=146,Ts=148,Rs=152,ws=153,Ds=154,Ls=155,ys=156,Us=157,Ps=158,Fs=165,Ns=166,Qs=1000054e3,Gs=1000054001,Os=1000054004,ks=1000054005,Ta=1000066e3,Hs=1000066004;class qn{constructor(n,e,i,a){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(n.buffer,n.byteOffset+e,i),this._littleEndian=a,this._offset=0}_nextUint8(){const n=this._dataView.getUint8(this._offset);return this._offset+=1,n}_nextUint16(){const n=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,n}_nextUint32(){const n=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,n}_nextUint64(){const n=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,n}_nextInt32(){const n=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,n}_nextUint8Array(n){const e=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,n);return this._offset+=n,e}_skip(n){return this._offset+=n,this}_scan(n,e=0){const i=this._offset;let a=0;for(;this._dataView.getUint8(this._offset)!==e&&a<n;)a++,this._offset++;return a<n&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,a)}}const Tt=[171,75,84,88,32,50,48,187,13,10,26,10];function Kr(t){return new TextDecoder().decode(t)}function xh(t){const n=new Uint8Array(t.buffer,t.byteOffset,Tt.length);if(n[0]!==Tt[0]||n[1]!==Tt[1]||n[2]!==Tt[2]||n[3]!==Tt[3]||n[4]!==Tt[4]||n[5]!==Tt[5]||n[6]!==Tt[6]||n[7]!==Tt[7]||n[8]!==Tt[8]||n[9]!==Tt[9]||n[10]!==Tt[10]||n[11]!==Tt[11])throw new Error("Missing KTX 2.0 identifier.");const e={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},i=17*Uint32Array.BYTES_PER_ELEMENT,a=new qn(t,Tt.length,i,!0);e.vkFormat=a._nextUint32(),e.typeSize=a._nextUint32(),e.pixelWidth=a._nextUint32(),e.pixelHeight=a._nextUint32(),e.pixelDepth=a._nextUint32(),e.layerCount=a._nextUint32(),e.faceCount=a._nextUint32(),e.levelCount=a._nextUint32(),e.supercompressionScheme=a._nextUint32();const r=a._nextUint32(),o=a._nextUint32(),s=a._nextUint32(),c=a._nextUint32(),A=a._nextUint64(),h=a._nextUint64(),p=3*Math.max(e.levelCount,1)*8,d=new qn(t,Tt.length+i,p,!0);for(let Y=0,ge=Math.max(e.levelCount,1);Y<ge;Y++)e.levels.push({levelData:new Uint8Array(t.buffer,t.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const m=new qn(t,r,o,!0);m._skip(4);const b=m._nextUint16(),M=m._nextUint16(),u=m._nextUint16(),l=m._nextUint16(),C={vendorId:b,descriptorType:M,versionNumber:u,colorModel:m._nextUint8(),colorPrimaries:m._nextUint8(),transferFunction:m._nextUint8(),flags:m._nextUint8(),texelBlockDimension:[m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8()],bytesPlane:[m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8()],samples:[]},B=(l/4-6)/4;for(let Y=0;Y<B;Y++){const ge={bitOffset:m._nextUint16(),bitLength:m._nextUint8(),channelType:m._nextUint8(),samplePosition:[m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&ge.channelType?(ge.sampleLower=m._nextInt32(),ge.sampleUpper=m._nextInt32()):(ge.sampleLower=m._nextUint32(),ge.sampleUpper=m._nextUint32()),C.samples[Y]=ge}e.dataFormatDescriptor.length=0,e.dataFormatDescriptor.push(C);const _=new qn(t,s,c,!0);for(;_._offset<c;){const Y=_._nextUint32(),ge=_._scan(Y),be=Kr(ge);if(e.keyValue[be]=_._nextUint8Array(Y-ge.byteLength-1),be.match(/^ktx/i)){const $e=Kr(e.keyValue[be]);e.keyValue[be]=$e.substring(0,$e.lastIndexOf("\0"))}_._skip(Y%4?4-Y%4:0)}if(h<=0)return e;const I=new qn(t,A,h,!0),v=I._nextUint16(),T=I._nextUint16(),E=I._nextUint32(),x=I._nextUint32(),L=I._nextUint32(),N=I._nextUint32(),O=[];for(let Y=0,ge=Math.max(e.levelCount,1);Y<ge;Y++)O.push({imageFlags:I._nextUint32(),rgbSliceByteOffset:I._nextUint32(),rgbSliceByteLength:I._nextUint32(),alphaSliceByteOffset:I._nextUint32(),alphaSliceByteLength:I._nextUint32()});const q=A+I._offset,y=q+E,V=y+x,K=V+L,X=new Uint8Array(t.buffer,t.byteOffset+q,E),te=new Uint8Array(t.buffer,t.byteOffset+y,x),j=new Uint8Array(t.buffer,t.byteOffset+V,L),ee=new Uint8Array(t.buffer,t.byteOffset+K,N);return e.globalData={endpointCount:v,selectorCount:T,imageDescs:O,endpointsData:X,selectorsData:te,tablesData:j,extendedData:ee},e}let zi,on,Ea;const Ki={env:{emscripten_notify_memory_growth:function(t){Ea=new Uint8Array(on.exports.memory.buffer)}}};class Mh{init(){return zi||(zi=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Xr).then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,Ki)).then(this._init):WebAssembly.instantiate(Buffer.from(Xr,"base64"),Ki).then(this._init),zi)}_init(n){on=n.instance,Ki.env.emscripten_notify_memory_growth(0)}decode(n,e=0){if(!on)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=n.byteLength,a=on.exports.malloc(i);Ea.set(n,a),e=e||Number(on.exports.ZSTD_findDecompressedSize(a,i));const r=on.exports.malloc(e),o=on.exports.ZSTD_decompress(r,e,a,i),s=Ea.slice(r,r+o);return on.exports.free(a),on.exports.free(r),s}}const Xr="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",Bh="display-p3",Th="display-p3-linear";({...Ze.spaces[Pt]});const Rh=new URL("/kidsney-demo/app-next/assets/basis_transcoder-VXdx5NbI.wasm",import.meta.url).toString(),wh=new URL("/kidsney-demo/app-next/assets/basis_transcoder-o4Hde_L7.js",import.meta.url).toString(),Xi=new WeakMap;let Ji=0,ji;class Ht extends xa{constructor(n){super(n),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Eh,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(n){return this.transcoderPath=n,this}setWorkerLimit(n){return this.workerPool.setWorkerLimit(n),this}async detectSupportAsync(n){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await n.init(),this.detectSupport(n)}detectSupport(n){return n.isWebGPURenderer===!0?this.workerConfig={astcSupported:n.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:n.hasFeature("texture-compression-etc1"),etc2Supported:n.hasFeature("texture-compression-etc2"),dxtSupported:n.hasFeature("texture-compression-s3tc"),bptcSupported:n.hasFeature("texture-compression-bc"),pvrtcSupported:n.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:n.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:n.extensions.has("WEBGL_compressed_texture_astc")&&n.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:n.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:n.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:n.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:n.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:n.extensions.has("WEBGL_compressed_texture_pvrtc")||n.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const n=new In(this.manager);n.setWithCredentials(this.withCredentials);const e=new In(this.manager);e.setWithCredentials(this.withCredentials),e.setResponseType("arraybuffer");let i,a;this.transcoderPath===""?(i=n.loadAsync(wh),a=e.loadAsync(Rh)):(n.setPath(this.transcoderPath),i=n.loadAsync("basis_transcoder.js"),e.setPath(this.transcoderPath),a=e.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([i,a]).then(([r,o])=>{const s=Ht.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(Ht.EngineFormat),"let _EngineType = "+JSON.stringify(Ht.EngineType),"let _TranscoderFormat = "+JSON.stringify(Ht.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Ht.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const A=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return A.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),A})}),Ji>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Ji++}return this.transcoderPending}load(n,e,i,a){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new In(this.manager);r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(n,o=>{this.parse(o,e,a)},i,a)}parse(n,e,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Xi.has(n))return Xi.get(n).promise.then(e).catch(i);this._createTexture(n).then(a=>e?e(a):null).catch(i)}_createTextureFrom(n,e){const{type:i,error:a,data:{faces:r,width:o,height:s,format:c,type:A,dfdFlags:h}}=n;if(i==="error")return Promise.reject(a);let p;if(e.faceCount===6)p=new SA(r,c,A);else{const d=r[0].mipmaps;p=e.layerCount>1?new xA(d,o,s,e.layerCount,c,A):new Oo(d,o,s,c,A)}return p.minFilter=r[0].mipmaps.length===1?gt:en,p.magFilter=gt,p.generateMipmaps=!1,p.needsUpdate=!0,p.colorSpace=Vs(e),p.premultiplyAlpha=!!(h&bh),p}async _createTexture(n,e={}){const i=xh(new Uint8Array(n)),a=i.vkFormat===Ta&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===Sh||a&&!this.workerConfig.astcHDRSupported))return yh(i);const o=e,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:n,taskConfig:o},[n])).then(c=>this._createTextureFrom(c.data,i));return Xi.set(n,{promise:s}),s}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Ji--}}Ht.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Ht.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Ht.EngineFormat={RGBAFormat:xt,RGBA_ASTC_4x4_Format:yn,RGB_BPTC_UNSIGNED_Format:sa,RGBA_BPTC_Format:ni,RGBA_ETC2_EAC_Format:bi,RGBA_PVRTC_4BPPV1_Format:ti,RGBA_S3TC_DXT5_Format:Ln,RGB_ETC1_Format:ia,RGB_ETC2_Format:_i,RGB_PVRTC_4BPPV1_Format:na,RGBA_S3TC_DXT1_Format:Dn};Ht.EngineType={UnsignedByteType:Te,HalfFloatType:St,FloatType:yt};Ht.BasisWorker=function(){let t,n,e;const i=_EngineFormat,a=_EngineType,r=_TranscoderFormat,o=_BasisFormat;self.addEventListener("message",function(b){const M=b.data;switch(M.type){case"init":t=M.config,s(M.transcoderBinary);break;case"transcode":n.then(()=>{try{const{faces:u,buffers:l,width:C,height:B,hasAlpha:_,format:I,type:v,dfdFlags:T}=c(M.buffer);self.postMessage({type:"transcode",id:M.id,data:{faces:u,width:C,height:B,hasAlpha:_,format:I,type:v,dfdFlags:T}},l)}catch(u){console.error(u),self.postMessage({type:"error",id:M.id,error:u.message})}});break}});function s(b){n=new Promise(M=>{e={wasmBinary:b,onRuntimeInitialized:M},BASIS(e)}).then(()=>{e.initializeBasis(),e.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(b){const M=new e.KTX2File(new Uint8Array(b));function u(){M.close(),M.delete()}if(!M.isValid())throw u(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let l;if(M.isUASTC())l=o.UASTC;else if(M.isETC1S())l=o.ETC1S;else if(M.isHDR())l=o.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const C=M.getWidth(),B=M.getHeight(),_=M.getLayers()||1,I=M.getLevels(),v=M.getFaces(),T=M.getHasAlpha(),E=M.getDFDFlags(),{transcoderFormat:x,engineFormat:L,engineType:N}=p(l,C,B,T);if(!C||!B||!I)throw u(),new Error("THREE.KTX2Loader:	Invalid texture");if(!M.startTranscoding())throw u(),new Error("THREE.KTX2Loader: .startTranscoding failed");const O=[],q=[];for(let y=0;y<v;y++){const V=[];for(let K=0;K<I;K++){const X=[];let te,j;for(let Y=0;Y<_;Y++){const ge=M.getImageLevelInfo(K,Y,y);y===0&&K===0&&Y===0&&(ge.origWidth%4!==0||ge.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),I>1?(te=ge.origWidth,j=ge.origHeight):(te=ge.width,j=ge.height);let be=new Uint8Array(M.getImageTranscodedSizeInBytes(K,Y,0,x));const $e=M.transcodeImage(be,K,Y,y,x,0,-1,-1);if(N===a.HalfFloatType&&(be=new Uint16Array(be.buffer,be.byteOffset,be.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!$e)throw u(),new Error("THREE.KTX2Loader: .transcodeImage failed.");X.push(be)}const ee=m(X);V.push({data:ee,width:te,height:j}),q.push(ee.buffer)}O.push({mipmaps:V,width:C,height:B,format:L,type:N})}return u(),{faces:O,buffers:q,width:C,height:B,hasAlpha:T,dfdFlags:E,format:L,type:N}}const A=[{if:"astcSupported",basisFormat:[o.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[a.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[a.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[a.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[a.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[a.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[a.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[o.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[a.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[a.UnsignedByteType,a.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[o.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[a.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[o.ETC1S]:A.filter(b=>b.basisFormat.includes(o.ETC1S)).sort((b,M)=>b.priorityETC1S-M.priorityETC1S),[o.UASTC]:A.filter(b=>b.basisFormat.includes(o.UASTC)).sort((b,M)=>b.priorityUASTC-M.priorityUASTC),[o.UASTC_HDR]:A.filter(b=>b.basisFormat.includes(o.UASTC_HDR)).sort((b,M)=>b.priorityHDR-M.priorityHDR)};function p(b,M,u,l){const C=h[b];for(let B=0;B<C.length;B++){const _=C[B];if(_.if&&!t[_.if]||!_.basisFormat.includes(b)||l&&_.transcoderFormat.length<2||_.needsPowerOfTwo&&!(d(M)&&d(u)))continue;const I=_.transcoderFormat[l?1:0],v=_.engineFormat[l?1:0],T=_.engineType[0];return{transcoderFormat:I,engineFormat:v,engineType:T}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(b){return b<=2?!0:(b&b-1)===0&&b!==0}function m(b){if(b.length===1)return b[0];let M=0;for(let C=0;C<b.length;C++){const B=b[C];M+=B.byteLength}const u=new Uint8Array(M);let l=0;for(let C=0;C<b.length;C++){const B=b[C];u.set(B,l),l+=B.byteLength}return u}};const Dh=new Set([xt,mi,zt,Rn]),Lh=new Set([Ba]),Yi={[us]:xt,[ds]:zt,[fs]:Rn,[ls]:xt,[As]:zt,[cs]:Rn,[Ba]:xt,[ss]:xt,[os]:xt,[rs]:zt,[as]:zt,[is]:Rn,[ns]:Rn,[hs]:mi,[ps]:mi,[Rs]:bi,[Ts]:_i,[ws]:aa,[Ds]:ra,[Ls]:Ii,[ys]:oa,[Ta]:yn,[Ps]:yn,[Us]:yn,[Hs]:Yn,[Ns]:Yn,[Fs]:Yn,[_s]:Dn,[Es]:Dn,[ms]:jn,[gs]:jn,[Is]:Ln,[bs]:Ln,[vs]:Aa,[Cs]:ca,[xs]:la,[Ss]:Ci,[Bs]:ni,[Ms]:ni,[ks]:ti,[Gs]:ti,[Os]:Ei,[Qs]:Ei},_n={[us]:yt,[ds]:yt,[fs]:yt,[ls]:St,[As]:St,[cs]:St,[Ba]:Qn,[ss]:Te,[os]:Te,[rs]:Te,[as]:Te,[is]:Te,[ns]:Te,[hs]:va,[ps]:Sa,[Rs]:Te,[Ts]:Te,[ws]:Te,[Ds]:Te,[Ls]:Te,[ys]:Te,[Ta]:St,[Ps]:Te,[Us]:Te,[Hs]:St,[Ns]:Te,[Fs]:Te,[_s]:Te,[Es]:Te,[ms]:Te,[gs]:Te,[Is]:Te,[bs]:Te,[vs]:Te,[Cs]:Te,[xs]:Te,[Ss]:Te,[Bs]:Te,[Ms]:Te,[ks]:Te,[Gs]:Te,[Os]:Te,[Qs]:Te};async function yh(t){const{vkFormat:n}=t;if(Yi[n]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+n);_n[n]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+n);let e;t.supercompressionScheme===qr&&(ji||(ji=new Promise(async o=>{const s=new Mh;await s.init(),o(s)})),e=await ji);const i=[];for(let o=0;o<t.levels.length;o++){const s=Math.max(1,t.pixelWidth>>o),c=Math.max(1,t.pixelHeight>>o),A=t.pixelDepth?Math.max(1,t.pixelDepth>>o):0,h=t.levels[o];let p;if(t.supercompressionScheme===_h)p=h.levelData;else if(t.supercompressionScheme===qr)p=e.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;_n[n]===yt?d=new Float32Array(p.buffer,p.byteOffset,p.byteLength/Float32Array.BYTES_PER_ELEMENT):_n[n]===St||_n[n]===Qn?d=new Uint16Array(p.buffer,p.byteOffset,p.byteLength/Uint16Array.BYTES_PER_ELEMENT):_n[n]===va||_n[n]===Sa?d=new Uint32Array(p.buffer,p.byteOffset,p.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=p,i.push({data:d,width:s,height:c,depth:A})}const a=t.levelCount===0||i.length>1;let r;if(Dh.has(Yi[n]))r=t.pixelDepth===0?new oo(i[0].data,t.pixelWidth,t.pixelHeight):new Mo(i[0].data,t.pixelWidth,t.pixelHeight,t.pixelDepth),r.minFilter=a?_a:qt,r.magFilter=qt,r.generateMipmaps=t.levelCount===0,r.normalized=Lh.has(n);else{if(t.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");r=new Oo(i,t.pixelWidth,t.pixelHeight),r.minFilter=a?en:gt,r.magFilter=gt}return r.mipmaps=i,r.type=_n[n],r.format=Yi[n],r.colorSpace=Vs(t),r.needsUpdate=!0,Promise.resolve(r)}function Vs(t){const n=t.dataFormatDescriptor[0];return n.colorPrimaries===Ch?n.transferFunction===zr?Pt:Nt:n.colorPrimaries===vh?n.transferFunction===zr?Bh:Th:n.colorPrimaries===Ih?pn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${n.colorPrimaries}"`),pn)}let Zi=null;function Uh(){if(!Zi){const t=new yp;Zi=new Ht().setTranscoderPath("/kidsney-demo/app-next/basis/").detectSupport(t),t.dispose()}return Zi}const Ft=13938487,Ra=12096543,Ph=9413560,Si=2765128;function Fh(t){return new vi({color:t})}function ct(t,n,e=0,i=0,a=0){const r=new He(t,Fh(n));return r.position.set(e,i,a),r}function Nh(t,n,e,i,a,r){for(let o=0;o<n;o++){const s=o/n*Math.PI*2,c=ct(new ua(a*.42,a,4),r,Math.cos(s)*e,i,Math.sin(s)*e);c.rotation.y=-s,t.add(c)}}function Jr(t=1){const n=new qe;return n.add(ct(new Ot(.16*t,.17*t,.09*t,12,1,!0),Ft,0,.045*t,0)),Nh(n,6,.16*t,.09*t,.12*t,Ft),n}function Qh(){const t=new qe;for(const n of[-1,1]){const e=ct(new Ut(.14,.018,6,12,Math.PI*.8),Ra,n*.1,.06,0);e.rotation.z=n>0?-.5:Math.PI+.5,t.add(e);for(let i=0;i<4;i++){const a=i/3,r=ct(new Cn(.028,6,5),Ft,n*(.16-a*.05),.02+a*.12,.02);r.scale.set(1,.45,.6),t.add(r)}}return t}function Gh(){const t=new qe,n=ct(new Ut(.15,.02,6,14),Ft,0,.03,0);n.rotation.x=Math.PI/2,t.add(n);for(let e=-2;e<=2;e++){const i=ct(new tn(.02,.14-Math.abs(e)*.03,.1),Ft,0,.1,e*.045);i.rotation.x=-.25,t.add(i)}return t}function Oh(){const t=new qe,n=ct(new Ut(.155,.016,6,16),Si,0,.02,0);n.rotation.x=Math.PI/2,t.add(n),t.add(ct(new Ot(.045,.05,.05,10),Ph,0,.05,.15));const e=ct(new Ot(.035,.035,.012,10),16773808,0,.05,.178);return e.rotation.x=Math.PI/2,t.add(e),t}function kh(){const t=new qe,n=ct(new Ut(.17,.018,6,16,Math.PI),Ft,0,.02,0);t.add(n);for(const e of[-1,1]){const i=ct(new Ot(.05,.05,.035,12),Si,e*.17,.02,0);i.rotation.z=Math.PI/2,t.add(i)}return t}function Hh(){const t=new qe,n=ct(new Cn(.16,12,8,0,Math.PI*2,0,Math.PI/2),Si,0,.02,0);return t.add(n),t.add(ct(new tn(.16,.02,.14),Si,0,.03,.19)),t.add(ct(new Cn(.035,8,6),Ft,0,.18,0)),t}function Vh(){const t=new qe,n=ct(new Ut(.155,.014,6,16),Ra,0,.02,0);n.rotation.x=Math.PI/2,t.add(n);for(const e of[-1,1]){const i=ct(new Ut(.045,.014,6,12),Ft,e*.06,.05,.15);t.add(i);const a=ct(new Ot(.04,.04,.02,12),12575743,e*.06,.05,.155);a.rotation.x=Math.PI/2,t.add(a)}return t.add(ct(new tn(.05,.015,.015),Ft,0,.05,.155)),t}function Wh(){const t=new qe,n=ct(new Ut(.15,.014,6,16),Ft,0,.03,0);n.rotation.x=Math.PI/2,t.add(n);const e=ct(new ua(.035,.1,4),Ft,0,.09,.12);e.rotation.x=.35,t.add(e);for(const i of[-1,1]){const a=ct(new ua(.022,.06,4),Ft,i*.09,.06,.1);a.rotation.x=.3,t.add(a)}return t}function qh(){const t=new qe,n=ct(new Ot(.16,.17,.07,12,1,!0,-Math.PI/2.6,Math.PI/1.3),16765502,0,.05,.02);t.add(n);const e=ct(new Ut(.155,.015,6,16),Ra,0,.05,0);return e.rotation.x=Math.PI/2,t.add(e),t}function zh(t){switch(t){case"crown":return Jr(1);case"bigcrown":return Jr(1.35);case"laurel":return Qh();case"fincrest":return Gh();case"headlamp":return Oh();case"headphones":return kh();case"cap":return Hh();case"goldgoggles":return Vh();case"tiara":return Wh();case"visor":return qh();default:{const n=new qe,e=ct(new Ut(.15,.02,6,16),Ft,0,.03,0);return e.rotation.x=Math.PI/2,n.add(e),n}}}const Kh={crown:"crown",bigcrown:"crown",laurel:"laurel",fincrest:"fincrest",headlamp:"headlamp",headphones:"headphones",cap:"cap",goldgoggles:"goggles",tiara:"tiara",visor:"mask"};function Xh(t){const n=t.accessory;if(n.startsWith("glb:"))return n.slice(4).split("/").pop()??null;const e=Kh[n];return e?`${e}-r${t.region}.glb`:null}let Ai=null;function Jh(){return Ai||(Ai=new ts,Ai.setDecoderPath("/kidsney-demo/app-next/draco/")),Ai}async function jh(t,n=1){const e=Xh(t);if(e)try{const a=`/kidsney-demo/app-next/boss-accessories/${e}`,r=await ko(a,`acc-${e}`),o=new Zo;o.setDRACOLoader(Jh());const s=URL.createObjectURL(new Blob([r]));let c;try{c=(await o.loadAsync(s)).scene}finally{URL.revokeObjectURL(s)}const h=new Un().setFromObject(c).getSize(new he),p=(t.accessoryScale??.24)/Math.max(n,1e-6);c.scale.setScalar(p/Math.max(h.x,h.y,h.z,1e-6)),c.traverse(m=>{const b=m;if(!b.isMesh)return;b.castShadow=!0,b.frustumCulled=!1;const M=b.material;b.material=new Vt({map:M?.map??null})});const d=new qe;return d.add(c),d}catch{}const i=zh(t.accessory);return i.userData.procedural=!0,i}const It=(t,n={})=>new vi({color:t,...n}),jr={ball:()=>{const t=new qe;t.add(new He(new Cn(.13,16,12),It(16054015)));const n=new He(new Ut(.13,.02,8,24),It(2845951));return n.rotation.x=Math.PI/2,t.add(n),t},gloves:()=>{const t=new qe,n=new qe;n.add(new He(new Cn(.085,12,10),It(14693695)));const e=new He(new Ot(.055,.06,.07,10),It(14693695));e.position.y=-.09,n.add(e);const i=n.clone();i.position.x=-.16;const a=n.clone();return a.position.x=.16,t.add(i,a),t},baton:()=>{const t=new qe,n=new He(new Ot(.025,.025,.22,10),It(16766720));return n.rotation.z=Math.PI/2,t.add(n),t},fins:()=>{const t=new qe,n=new qe,e=new He(new tn(.09,.015,.26),It(2845951));e.position.z=.14,n.add(e),n.add(new He(new tn(.08,.07,.13),It(2845951)));const i=n.clone();i.position.x=-.1;const a=n.clone();return a.position.x=.1,t.add(i,a),t},rope:()=>{const t=new qe,n=It(14196810);for(let e=0;e<3;e++){const i=new He(new Ut(.14-e*.008,.022,8,20),n);i.rotation.x=Math.PI/2,i.position.y=e*.045,t.add(i)}return t},mic:()=>{const t=new qe;t.add(new He(new Ot(.02,.024,.13,8),It(3357269)));const n=new He(new Cn(.05,12,10),It(16766720,{emissive:3351040}));return n.position.y=.09,t.add(n),t},board:()=>{const t=new qe;t.add(new He(new tn(.16,.02,.5),It(16766720)));for(const n of[-.17,.17]){const e=new He(new tn(.1,.05,.04),It(9080734));e.position.set(0,-.035,n),t.add(e)}return t},poles:()=>{const t=new qe,n=It(13159640),e=new qe;e.add(new He(new Ot(.008,.008,.55,6),n));const i=new He(new Ut(.03,.008,6,12),n);i.rotation.x=Math.PI/2,i.position.y=-.22,e.add(i);const a=e.clone();a.position.x=-.2;const r=e.clone();return r.position.x=.2,t.add(a,r),t},ribbon:()=>{const t=new qe;t.add(new He(new Ot(.012,.012,.14,8),It(16766720)));const n=It(16740536,{side:kt});for(let e=0;e<4;e++){const i=new He(new ei(.06,.22),n);i.position.y=.08-e*.2,i.rotation.x=.3*e,t.add(i)}return t},racket:()=>{const t=new qe,n=new He(new Ut(.09,.016,8,20),It(14170719));n.position.y=.19,t.add(n);const e=new He(new MA(.082,16),It(15790842,{side:kt}));e.position.y=.19,t.add(e);const i=new He(new Ot(.018,.02,.14,8),It(3357269));return i.position.y=.06,t.add(i),t}},Yh=new Set(["gloves","fins","poles"]);function Zh(t,n,e){const i=(jr[e.mesh]??jr.ball)();i.traverse(c=>{const A=c;A.isMesh&&(A.castShadow=!0,A.frustumCulled=!1)});const a=e.bones??[e.bone??""],r=[],o=new Un().setFromObject(t).getSize(new he).y,s=o>.01?o/1.85:1;if(Yh.has(e.mesh)&&i.children.length>=2&&a.length===2)for(let c=0;c<2;c++){const A=t.getObjectByName(a[c]);if(!A)continue;const h=i.children[0];h.removeFromParent(),n.add(h),h.visible=!1,h.scale.multiplyScalar(s),r.push({obj:h,bone:A})}else{n.add(i);const c=t.getObjectByName(a[0]);c&&(i.visible=!1,i.scale.multiplyScalar(s),r.push({obj:i,bone:c}))}return r}function $h(t,n){for(const e of t.tracks){if(!/^(mixamorigLeftUpLeg|mixamorigRightUpLeg)\.quaternion$/.test(e.name))continue;const i=e.values,a=i.length/4,r=new it;for(let A=0;A<a;A++){const h=new it(i[A*4],i[A*4+1],i[A*4+2],i[A*4+3]);A>0&&h.dot(r)<0&&h.set(-h.x,-h.y,-h.z,-h.w),r.x+=h.x,r.y+=h.y,r.z+=h.z,r.w+=h.w}r.normalize();const o=r.clone().invert(),s=new it,c=new he;for(let A=0;A<a;A++){s.set(i[A*4],i[A*4+1],i[A*4+2],i[A*4+3]),s.dot(r)<0&&s.set(-s.x,-s.y,-s.z,-s.w),s.premultiply(o);let h=2*Math.acos(Math.min(1,Math.abs(s.w)));if(h<1e-5)continue;c.set(s.x,s.y,s.z).normalize(),h*=n;const p=Math.sin(h/2);s.set(c.x*p,c.y*p,c.z*p,Math.cos(h/2)),s.premultiply(r),i[A*4]=s.x,i[A*4+1]=s.y,i[A*4+2]=s.z,i[A*4+3]=s.w}}}const $i=2.6,li=.08,eg=1712440,Yr=.035,Zr="football_boy",ea=1.15,tg=2.5,$r=.35,eo=new Fe(5327048),to=.32,ng=16721944,ig={1:1.019,2:.985,3:1.005,4:1.032,5:.99,6:1.035,7:1.039,8:1.004,9:1.044,10:1.004},ag=t=>1+.25*(Math.min(Math.max(t,1),30)/30),rg={2:8377599,5:5213695,8:11561983,10:16763198},no=Math.PI/2;function io(t,n){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d"),a=i.createRadialGradient(64,64,4,64,64,62);a.addColorStop(0,t),a.addColorStop(1,n),i.fillStyle=a,i.fillRect(0,0,128,128);const r=new UA(e);return r.colorSpace=Pt,r}class og{object=new qe;pairs=[];joints=[];linePos;lineGeom;sphereMesh;constructor(n,e){n.updateWorldMatrix(!0,!0),n.traverse(a=>{this.joints.push(a);for(const r of a.children)this.pairs.push([a,r])}),this.linePos=new Float32Array(this.pairs.length*6),this.lineGeom=new An,this.lineGeom.setAttribute("position",new an(this.linePos,3));const i=new Po(this.lineGeom,new yo({color:e,transparent:!0,opacity:.9}));i.frustumCulled=!1,this.sphereMesh=new To(new Cn(.035,8,6),new Vt({color:e}),this.joints.length),this.sphereMesh.frustumCulled=!1,this.object.add(i,this.sphereMesh)}update(){const n=new he;for(let i=0;i<this.pairs.length;i++){const[a,r]=this.pairs[i];a.getWorldPosition(n),this.linePos.set([n.x,n.y,n.z],i*6),r.getWorldPosition(n),this.linePos.set([n.x,n.y,n.z],i*6+3)}this.lineGeom.attributes.position.needsUpdate=!0;const e=new Xt;for(let i=0;i<this.joints.length;i++)this.joints[i].getWorldPosition(n),e.makeTranslation(n.x,n.y,n.z),this.sphereMesh.setMatrixAt(i,e);this.sphereMesh.instanceMatrix.needsUpdate=!0}setColor(n){this.object.children[0].material.color.setHex(n),this.sphereMesh.material.color.setHex(n)}dispose(){this.lineGeom.dispose(),this.object.children[0].material.dispose(),this.sphereMesh.dispose(),this.sphereMesh.material.dispose()}}function sg(t,n){const e=new Vt({color:eg,side:Rt});e.onBeforeCompile=a=>{a.uniforms.outlineWidth={value:n},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float outlineWidth;`).replace("#include <skinning_vertex>",`#include <skinning_vertex>
transformed += normalize(objectNormal) * outlineWidth;`)};const i=new Ma(t.geometry,e);return i.userData.outline=!0,i.bind(t.skeleton,t.bindMatrix),i.frustumCulled=!1,i.castShadow=!1,t.add(i),i}class ht{constructor(n){this.opts=n,this.tint=n.tint,this.root.add(this.inner),this.shadow=new He(new ei(1.6,.9),new Vt({map:io("rgba(0,0,0,0.55)","rgba(0,0,0,0)"),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,n.bossRegion!=null&&this.shadow.scale.setScalar(ea)}opts;kind="three";root=new qe;inner=new qe;mixer;rigRoot;lines=null;mesh=null;toonMat=null;actions=new Map;actionPromises=new Map;playReq=0;playInflight=null;liveActions=new Set;current=null;currentState=null;introPlaying=!1;shadow;aura=null;auraHull=null;auraPulseT=0;hitStopped=!1;tint;disposed=!1;mirrorMode=!1;skinYawRad=0;superProp=null;superPropTried=!1;bossTinted=!1;outfitTint=null;bossEyes=null;bossAura=null;_tmpV=new he;_tmpQ=new it;_tmpS=new he;glbMode=!1;mats=[];static glbSources=new Map;static hipsFixes=new Map;static actionErrors=[];static playTrace=[];static playTick=-1;heroId=Zr;rag=null;async init(n){const e=await this.initGlbRig();if(this.glbMode=!0,this.rigRoot=e,this.glbMode&&this.inner.scale.setScalar(ag(this.opts.level??1)*(this.opts.bossRegion!=null?ea:1)),this.glbMode)this.inner.add(e);else{const i=new Un().setFromObject(e),a=Math.max(1,i.max.y-i.min.y),r=$i/a;this.inner.add(e),this.inner.scale.setScalar(r),e.position.y=-i.min.y,e.traverse(o=>{const s=o;s.isSkinnedMesh&&(this.toonMat||(this.toonMat=new vi({color:this.tint}),s.material=this.toonMat),s.frustumCulled=!1,this.mesh=s)}),this.mesh||(this.lines=new og(e,this.tint),n?.add(this.lines.object))}this.mixer=new BA(e),await this.play("idle"),n&&(n.add(this.root,this.shadow),this.opts.level&&this.opts.level>=2&&this.attachAura(n,this.opts.level))}async initGlbRig(){const e=(await Ys())._heroes[this.opts.heroId];this.heroId=e&&e.status==="ready"&&e.glb?this.opts.heroId:Zr;const i=this.opts.store?"store":this.opts.lod2?"lod2":this.opts.lod1?"lod1":"glb",a=`${this.heroId}:${i}`;let r=ht.glbSources.get(a);r||(r=ht.loadGlbSource(this.heroId,i),ht.glbSources.set(a,r),r.catch(()=>ht.glbSources.delete(a)));const o=await r,s=jo(o);{const c=new URLSearchParams(location.search),A=c.has("yawOverride")?Number(c.get("yawOverride")):c.has("noYaw")?0:await Zs(this.heroId);this.skinYawRad=bn.degToRad(A)}return this.mats=[],s.traverse(c=>{const A=c;if(!A.isMesh||(A.frustumCulled=!1,A.castShadow=!0,A.userData.outline))return;const h=A.material??null,p=h?.color?.clone()??new Fe(16777215),d=new vi({color:p,map:h?.map??null});A.material=d,this.mats.push({mat:d,base:p}),A.isSkinnedMesh&&(this.mesh=this.mesh??A)}),this.opts.bossRegion!=null&&await this.applyBossConfig(s,this.opts.bossRegion),s}async applyBossConfig(n,e){const i=await $s(e);if(!i||this.disposed)return;this.applyBossTint();const a=n.getObjectByName(i.bone);if(!a)return;const r=a.getWorldPosition(new he).y,o=r/(ig[e]??r),s=a.getWorldScale(new he).x||1,c=await jh({accessory:i.accessory,region:e,accessoryScale:(i.accessoryScale??.24)*o},s);if(c.scale.setScalar(c.userData.procedural?tg:1),c.position.set(i.offset[0]*o/s,i.offset[1]*o/s,i.offset[2]*o/s),i.attachMode==="bone"&&i.rot){const A=bn.degToRad;c.rotation.set(A(i.rot[0]),A(i.rot[1]),A(i.rot[2]))}a.add(c),this.attachBossEyes(a,o),this.attachBossAura()}applyBossTint(){for(const{mat:n,base:e}of this.mats)n.color.copy(e).multiplyScalar($r).lerp(eo,to);this.bossTinted=!0}attachBossEyes(n,e){const i=n.getWorldScale(new he).x||1,a=io("rgba(255,150,60,1)","rgba(255,60,10,0)"),r=[];for(const o of[-1,1]){const s=new TA({map:a,color:ng,blending:Tn,depthWrite:!1,depthTest:!1,transparent:!0,opacity:.9}),c=new RA(s);c.position.set(o*.09*e/i,.19*e/i,.2*e/i),c.scale.setScalar(.2/i),n.add(c),r.push(c)}this.bossEyes={sprites:r,tex:a,t:0}}attachBossAura(){const e=new Float32Array(126);for(let o=0;o<42;o++){const s=Math.random()*Math.PI*2,c=.55+Math.random()*.45;e[o*3]=Math.cos(s)*c,e[o*3+1]=.1+Math.random()*2.3,e[o*3+2]=Math.sin(s)*c*.7}const i=new An;i.setAttribute("position",new an(e,3));const a=new Lo({color:4861854,size:.11,transparent:!0,opacity:.55,blending:Tn,depthWrite:!1,sizeAttenuation:!0}),r=new Fo(i,a);r.frustumCulled=!1,this.inner.add(r),this.bossAura={points:r,geom:i,mat:a,t:0}}static async loadGlbSource(n,e){const i=await ec(n,e),a=await ko(i,`${n}-${e}`),r=new Zo,o=new ts;o.setDecoderPath("/kidsney-demo/app-next/draco/"),r.setDRACOLoader(o),r.setMeshoptDecoder(mh),i.endsWith("-ktx.glb")&&r.setKTX2Loader(Uh());const s=URL.createObjectURL(new Blob([a]));let c;try{c=await r.loadAsync(s)}finally{URL.revokeObjectURL(s)}const A=c.scene;A.updateMatrixWorld(!0),e==="glb"&&A.traverse(C=>{const _=C.material,I=_?.map?.image;if(!_?.map||!I?.width||I.width<=1024)return;const v=document.createElement("canvas");v.width=v.height=1024,v.getContext("2d").drawImage(I,0,0,1024,1024),_.map.image=v,_.map.needsUpdate=!0});const h=C=>A.getObjectByName(C),p=C=>C.getWorldPosition(new he),d=p(h("mixamorigHead")).sub(p(h("mixamorigHips"))).normalize();A.quaternion.premultiply(new it().setFromUnitVectors(d,new he(0,1,0))),A.updateMatrixWorld(!0);const m=new he().crossVectors(p(h("mixamorigLeftArm")).sub(p(h("mixamorigRightArm"))).normalize(),new he(0,1,0));m.y=0,m.normalize(),A.quaternion.premultiply(new it().setFromUnitVectors(m,new he(0,0,1))),A.updateMatrixWorld(!0);const b=await tc(n),M=new Un().setFromObject(A),u=$i/Math.max(.01,M.max.y-M.min.y)*b;A.scale.setScalar(u),A.updateMatrixWorld(!0);const l=new Un().setFromObject(A);return A.position.y-=l.min.y,A.updateMatrixWorld(!0),A.traverse(C=>{const B=C;B.isSkinnedMesh&&!B.userData.outline&&sg(B,Yr/u)}),await ht.computeHipsFix(A,n),A}static async computeHipsFix(n,e){const i=await ht.mixamoRef(),a=n.getObjectByName("mixamorigHips");if(!i||!a?.parent)return;const r=new it().fromArray(i.parentQuat),o=a.parent.getWorldQuaternion(new it),s=o.clone().invert().multiply(r),c=o.clone().invert().multiply(n.getWorldQuaternion(new it)),A=a.position.length()>1e-4?a.position.length():a.getWorldPosition(new he).length(),h=i.hipsClipLen??0;let p=1;h>0&&A>0&&Math.abs(A-h)/h>.2&&(p=A/h),ht.hipsFixes.set(e,{qFix:s,qPosFix:c,hipsScale:p,qMRest:new it().fromArray(i.hipsRestQuat),qMWorld:r.clone()})}static mixamoRefPromise=null;static mixamoRef(){return ht.mixamoRefPromise||(ht.mixamoRefPromise=fetch("/kidsney-demo/app-next/generated/clips/mixamo-ref.json").then(n=>n.ok?n.json():null).catch(()=>null)),ht.mixamoRefPromise}actionFor(n){const e=wA(n,this.opts.heroId);let i=this.actionPromises.get(e);return ht.playTrace.length<2e4&&n!=="idle"&&ht.playTrace.push(`${this.opts.heroId}@${ht.playTick}+${Math.round(performance.now())} actionFor(${e}) ${i?"HIT":"miss"}`),i||(i=(async()=>{try{const a=await oi(e);if(this.disposed)return null;const r=this.glbMode?this.applyHipsFix(a):a,o=this.mixer.clipAction(r);return this.actions.set(e,o),o}catch(a){return ht.actionErrors.push(`${e}: ${a instanceof Error?a.message:String(a)}`),n==="super"?this.actionFor("heavy_f"):n!=="idle"?this.actionFor("idle"):null}})(),this.actionPromises.set(e,i),i.catch(()=>this.actionPromises.delete(e))),i}applyHipsFix(n){const e=new No(n.name,n.duration,n.tracks.map(u=>{const l=u.constructor;if((u.name==="mixamorigHips.quaternion"||u.name==="mixamorigHips.position")&&u.times.length>=2&&u.times[u.times.length-1]>u.times[0]+1e-6){const C=u.getValueSize(),B=C===4,_=u.times[0],I=u.times[u.times.length-1],v=Math.max(2,Math.round((I-_)*60)+1),T=new Array(v),E=new Array(v*C);let x=0;for(let L=0;L<v;L++){const N=Math.min(_+L/60,I);for(T[L]=N;x<u.times.length-2&&u.times[x+1]<N;)x++;const O=u.times[x],q=u.times[x+1],y=q>O?Math.min(1,Math.max(0,(N-O)/(q-O))):0;if(B){const V=u.values;it.slerpFlat(E,L*4,V,x*4,V,(x+1)*4,y)}else for(let V=0;V<C;V++){const K=u.values[x*C+V],X=u.values[(x+1)*C+V];E[L*C+V]=K+(X-K)*y}}return new l(u.name,T,E)}return new l(u.name,Array.from(u.times),Array.from(u.values))})),{qFix:i,qPosFix:a,hipsScale:r,qMRest:o,qMWorld:s}=ht.hipsFixes.get(this.heroId)??{qFix:null,qPosFix:null,hipsScale:1,qMRest:null,qMWorld:null},c=o!=null&&s!=null&&!DA(e.name),A=c?o.clone().invert():null,h=new it,p=new it,d=new it,m=new it,b=s,M=c&&b?b.clone().invert():null;for(const u of e.tracks){if(i&&u.name==="mixamorigHips.quaternion")for(let l=0;l<u.values.length;l+=4){if(h.fromArray(u.values,l),c&&A&&b&&M){p.copy(h).multiply(A),d.copy(b).multiply(p).multiply(M);const C=Math.hypot(d.y,d.w)||1;m.set(0,d.y/C,0,d.w/C).normalize(),m.invert(),d.premultiply(m),p.copy(M).multiply(d).multiply(b),h.copy(p).multiply(o)}h.premultiply(i),h.toArray(u.values,l)}if(u.name==="mixamorigHips.position"){if(a){const l=new he;for(let C=0;C<u.values.length;C+=3)l.fromArray(u.values,C),l.applyQuaternion(a),l.toArray(u.values,C)}if(r!==1)for(let l=0;l<u.values.length;l++)u.values[l]*=r}}return e}async play(n){if(this.playInflight===n)return;this.playInflight=n;const e=++this.playReq,i=(a,r="")=>{ht.playTrace.length<2e4&&ht.playTrace.push(`${this.opts.heroId}@${ht.playTick}+${Math.round(performance.now())} ${n}:${a}${r}`)};i("enter");try{const a=await this.actionFor(n);if(i("afterAwait",a?" action":" NULL"),!a||this.disposed||e!==this.playReq)return;const r=PA.looping.has(n);a.reset(),a.setLoop(r?hr:Pi,1/0),a.clampWhenFinished=!r;const o=LA(n);o&&a.getClip().duration>0?a.setEffectiveTimeScale(a.getClip().duration/o):a.setEffectiveTimeScale(1),this.current&&this.current!==a&&a.crossFadeFrom(this.current,li,!1);for(const s of this.liveActions)s!==a&&s.getEffectiveWeight()>0&&s.fadeOut(li);this.liveActions.add(a),a.play(),this.current=a,this.currentState=n,n==="super"&&this.ensureSuperProp(),i("done")}finally{e===this.playReq&&(this.playInflight=null)}}async playIntroClip(n){if(this.rag||this.introPlaying||this.disposed)return;let e=this.actions.get(n);if(!e)try{const i=await oi(n);if(this.disposed)return;const a=this.glbMode?this.applyHipsFix(i):i;e=this.mixer.clipAction(a),this.actions.set(n,e)}catch{return}this.introPlaying=!0,e.reset(),e.setLoop(Pi,1),e.clampWhenFinished=!0,e.setEffectiveTimeScale(1),this.current&&this.current!==e&&e.crossFadeFrom(this.current,li,!1),e.play(),this.current=e}endIntro(){this.introPlaying&&(this.introPlaying=!1,this.currentState=null)}async ensureSuperProp(){if(this.superProp||this.superPropTried||!this.glbMode)return;this.superPropTried=!0;const n=await nc(this.heroId);if(!n||this.disposed||!this.rigRoot)return;const e=Zh(this.rigRoot,this.root,n);e.length&&(this.superProp={entries:e,frames:n.frames,rotQ:n.rot?new it().setFromEuler(new yA(...n.rot)):null})}updateSuperProp(){if(!this.superProp)return;const n=this.currentState==="super"&&this.current!=null,e=n?this.current.time*30:-1,i=n&&e>=this.superProp.frames[0]&&e<=this.superProp.frames[1];for(const a of this.superProp.entries)a.obj.visible=i,i&&(a.bone.updateWorldMatrix(!0,!1),a.obj.position.setFromMatrixPosition(a.bone.matrixWorld).sub(this.root.position),a.bone.matrixWorld.decompose(this._tmpV,this._tmpQ,this._tmpS),a.obj.quaternion.copy(this._tmpQ),this.superProp.rotQ&&a.obj.quaternion.multiply(this.superProp.rotQ))}applyFrame(n){this.rag||(this.root.position.set(n.x,n.y,0),this.inner.rotation.y=no*n.facing+this.skinYawRad,n.hitstop!==this.hitStopped&&(this.hitStopped=n.hitstop,this.mixer.timeScale=n.hitstop?0:1),n.state!==this.currentState&&!this.introPlaying&&this.play(n.state))}yawDeviationDeg(){if(!this.rigRoot)return null;const n=this.rigRoot.getObjectByName("mixamorigHips"),e=ht.hipsFixes.get(this.heroId);if(!n?.parent||!e?.qFix||!e.qMRest)return null;const i=this.rigRoot.getWorldQuaternion(new it),a=n.parent.getWorldQuaternion(new it),r=e.qFix.clone().multiply(e.qMRest),o=a.clone().invert().multiply(i),s=r.clone().invert();if(new he(0,1,0).applyQuaternion(o).applyQuaternion(s).applyQuaternion(n.getWorldQuaternion(new it)).y<.8)return null;const A=a.multiply(r),p=n.getWorldQuaternion(new it).multiply(A.invert()),d=Math.hypot(p.y,p.w)||1,m=new it(0,p.y/d,0,p.w/d).normalize();let b=2*bn.radToDeg(Math.atan2(m.y,m.w));return b>180&&(b-=360),b<-180&&(b+=360),b}expectedYawDeg(n){return bn.radToDeg(no*n+this.skinYawRad)}debugState(){return this.currentState}debugActions(){if(!this.mixer)return[];const n=[],e=this.mixer._actions??[];for(const i of e){const a=i.getEffectiveWeight();a>.001&&n.push({clip:i.getClip().name,weight:+a.toFixed(3),time:+i.time.toFixed(2),running:i.isRunning()})}return n}debugInfo(){const n=this.rigRoot?.getObjectByName("mixamorigHips");return{rootY:+this.root.position.y.toFixed(3),innerYDeg:+bn.radToDeg(this.inner.rotation.y).toFixed(1),skinYawDeg:+bn.radToDeg(this.skinYawRad).toFixed(1),hipsWorld:n?n.getWorldPosition(new he).toArray().map(e=>+e.toFixed(2)):null,rigQ:this.rigRoot?this.rigRoot.quaternion.toArray().map(e=>+(+e).toFixed(3)):null}}advance(n){if(!this.mixer)return;this.rag&&this.updateRag(n),this.mixer.update(n),this.updateSuperProp(),this.lines?.update();const e=this.root.position.y;this.shadow.position.x=this.root.position.x,this.shadow.material.opacity=Math.max(.15,.9-e*.25);const i=Math.max(.4,1-e*.12);this.shadow.scale.setScalar(i*(this.opts.bossRegion!=null?ea:1)),this.aura&&(this.aura.t=(this.aura.t+n*18)%this.aura.frames,this.aura.tex.offset.x=Math.floor(this.aura.t)/this.aura.frames);const a=this.auraHull?.material;if(a&&(this.auraPulseT+=n,a.opacity=.16+.1*(.5+.5*Math.sin(this.auraPulseT*3))),this.bossEyes){this.bossEyes.t+=n;const r=.72+.28*(.5+.5*Math.sin(this.bossEyes.t*6));for(const o of this.bossEyes.sprites)o.material.opacity=r}this.bossAura&&(this.bossAura.t+=n,this.bossAura.points.rotation.y+=n*.7,this.bossAura.points.position.y=.05*Math.sin(this.bossAura.t*1.3))}setTint(n){if(this.glbMode){const i=new Fe(n??this.tint);for(const{mat:a,base:r}of this.mats)n==null?(this.bossTinted?a.color.copy(r).multiplyScalar($r).lerp(eo,to):this.outfitTint!=null?a.color.copy(r).lerp(new Fe(this.outfitTint),.45):a.color.copy(r),"emissive"in a&&a.emissive.setHex(0)):(a.color.copy(r).multiplyScalar(.45).lerp(i,.25),"emissive"in a&&a.emissive.setHex(1317422));return}const e=n??this.outfitTint??this.tint;this.toonMat?.color.setHex(e),this.lines?.setColor(e)}setOutfitTint(n){if(this.outfitTint=n,this.glbMode){for(const{mat:e,base:i}of this.mats)n==null?e.color.copy(i):e.color.copy(i).lerp(new Fe(n),.45),"emissive"in e&&e.emissive.setHex(0);return}this.setTint(null)}async attachAura(n,e){const{vfxSheet:i}=await Oa(async()=>{const{vfxSheet:A}=await import("./index-BOw5ME0O.js").then(h=>h.a6);return{vfxSheet:A}},__vite__mapDeps([0,1])),a=await i(`aura_level_${e>=10?10:e>=8?8:e>=5?5:2}`);if(!a||this.disposed)return;const r=await new wo().loadAsync(a),o=r.image,s=Math.max(1,Math.round(o.width/o.height));r.wrapS=Zn,r.repeat.set(1/s,1),r.colorSpace=Pt;const c=new He(new ei(2.4,2.4),new Vt({map:r,transparent:!0,blending:Tn,depthWrite:!1}));if(c.position.y=1.1,c.renderOrder=5,this.root.add(c),this.aura={mesh:c,tex:r,frames:s,t:0},this.mesh){const A=this.mesh.geometry;A.boundingBox||A.computeBoundingBox();const h=Math.max(.01,A.boundingBox.max.y-A.boundingBox.min.y),p=this.inner.scale.x||1,d=Yr*2.4*h/($i*p),m=new Vt({color:rg[e>=10?10:e>=8?8:e>=5?5:2],transparent:!0,opacity:.4,side:Rt,blending:Tn,depthWrite:!1});m.onBeforeCompile=M=>{M.uniforms.outlineWidth={value:d},M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
uniform float outlineWidth;`).replace("#include <skinning_vertex>",`#include <skinning_vertex>
transformed += normalize(objectNormal) * outlineWidth;`)};const b=new Ma(A,m);b.userData.outline=!0,b.bind(this.mesh.skeleton,this.mesh.bindMatrix),b.frustumCulled=!1,b.castShadow=!1,b.renderOrder=4,this.mesh.add(b),this.auraHull=b}}setAura(n){const e=n!=null&&n>=2;this.aura&&(this.aura.mesh.visible=e),this.auraHull&&(this.auraHull.visible=e)}ragdoll=null;ragdollRequested=!1;inRag(){return this.rag!==null}probeBones(){if(!this.rigRoot)return null;const n=new he,e=i=>{const a=this.rigRoot.getObjectByName(i);return a?(a.getWorldPosition(n),[+n.x.toFixed(3),+n.y.toFixed(3),+n.z.toFixed(3)]):[NaN,NaN,NaN]};return{hips:e("mixamorigHips"),head:e("mixamorigHead"),handR:e("mixamorigRightHand")}}boneWorldPoint(n){if(!this.rigRoot)return null;const e=this.rigRoot.getObjectByName(n);if(!e)return null;const i=new he;return e.getWorldPosition(i),{x:i.x,y:i.y}}beginRag(n=-1){if(!this.rag&&(this.current?.stop(),this.currentState="ragdoll",this.rag={t:0,y0:this.root.position.y,tipDir:Math.sign(n)||-1},this.glbMode&&this.rigRoot&&!this.ragdoll&&!this.ragdollRequested)){this.ragdollRequested=!0,this.root.updateWorldMatrix(!0,!0);const e=this.root.matrixWorld.clone();Oa(()=>import("./ragdoll-DRVv_tMe.js"),__vite__mapDeps([2,0,1,3,4])).then(i=>i.RapierRagdoll.create(this.rigRoot,e,this.rag.tipDir)).then(i=>{if(this.disposed||!this.rag){i.dispose();return}this.ragdoll=i,this.inner.rotation.z=0,this.root.position.y=this.rag.y0}).catch(()=>{this.ragdollRequested=!1})}}updateRag(n){if(this.ragdoll){this.root.updateWorldMatrix(!0,!1),this.ragdoll.step(n,this.root.matrixWorld);return}const e=this.rag;e.t+=n;const i=Math.min(1,e.t/.55),a=1-(1-i)*(1-i);this.root.position.y=e.y0*(1-a),this.inner.rotation.z=e.tipDir*a*(Math.PI/2)*.94}blendToGetup(){this.rag&&(this.rag=null,this.ragdoll?.dispose(),this.ragdoll=null,this.ragdollRequested=!1,this.inner.rotation.z=0,this.play("getup").then(()=>{this.current&&(this.current.stopFading(),this.current.fadeIn(.35).play())}))}async playExercise(n,e={}){if(this.disposed||!this.mixer)return;this.mirrorMode=!1;let i=this.actions.get(n);if(!i){const a=(e.source==="clips"?oi(n):gr(n)).catch(()=>null),r=(e.source==="clips"?gr(n):oi(n)).catch(()=>null),o=await a??await r;if(!o||this.disposed)return;const s=this.glbMode?this.applyHipsFix(o):o;n==="high_knees"&&$h(s,1.6),i=this.mixer.clipAction(s),this.actions.set(n,i)}i.reset(),i.setLoop(e.once?Pi:hr,1/0),i.clampWhenFinished=!!e.once,i.setEffectiveTimeScale(1),this.current&&this.current!==i&&i.crossFadeFrom(this.current,li,!1),i.play(),this.current=i,this.currentState="idle"}driveFromLandmarks(n){const e={};if(!this.rigRoot||this.disposed)return e;this.mirrorMode||(this.mirrorMode=!0,this.mixer.stopAllAction(),this.current=null,this.currentState=null);const i=.5,a=d=>{const m=n[d];return m&&(m.visibility??0)>=i?new he(m.x,-m.y,m.z):null},r=(d,m)=>{const b=a(d),M=a(m);return!b||!M?null:M.sub(b).normalize()},o=(d,m)=>{const b=a(d),M=a(m);return b&&M?b.add(M).multiplyScalar(.5):null},s=[{bone:"mixamorigSpine",child:"mixamorigSpine1",dir:null},{bone:"mixamorigLeftArm",child:"mixamorigLeftForeArm",dir:r(pt.shoulderL,pt.elbowL)},{bone:"mixamorigLeftForeArm",child:"mixamorigLeftHand",dir:r(pt.elbowL,pt.wristL)},{bone:"mixamorigRightArm",child:"mixamorigRightForeArm",dir:r(pt.shoulderR,pt.elbowR)},{bone:"mixamorigRightForeArm",child:"mixamorigRightHand",dir:r(pt.elbowR,pt.wristR)},{bone:"mixamorigLeftUpLeg",child:"mixamorigLeftLeg",dir:r(pt.hipL,pt.kneeL)},{bone:"mixamorigLeftLeg",child:"mixamorigLeftFoot",dir:r(pt.kneeL,pt.ankleL)},{bone:"mixamorigRightUpLeg",child:"mixamorigRightLeg",dir:r(pt.hipR,pt.kneeR)},{bone:"mixamorigRightLeg",child:"mixamorigRightFoot",dir:r(pt.kneeR,pt.ankleR)}],c=o(pt.hipL,pt.hipR),A=o(pt.shoulderL,pt.shoulderR);s[0].dir=c&&A?A.sub(c).normalize():null;const h=new he,p=new he;for(const d of s){const m=d.dir;if(!m||m.lengthSq()<1e-6)continue;const b=this.rigRoot.getObjectByName(d.bone),M=this.rigRoot.getObjectByName(d.child);if(!b||!M||!b.parent)continue;b.parent.updateWorldMatrix(!0,!1),b.getWorldPosition(p),M.getWorldPosition(h);const u=h.sub(p).normalize();if(u.lengthSq()<1e-6)continue;const l=new it().setFromUnitVectors(u,m),C=b.getWorldQuaternion(new it),B=b.parent.getWorldQuaternion(new it);b.quaternion.copy(B.invert().multiply(l.multiply(C))),b.updateWorldMatrix(!1,!1),e[d.bone]=Math.round(Math.atan2(m.y,m.x)*180/Math.PI*10)/10}return e}boneWorld(n){const e=this.rigRoot.getObjectByName(n);return e?e.getWorldPosition(new he):null}setVisible(n){this.root.visible=n,this.shadow.visible=n,this.lines&&(this.lines.object.visible=n)}dispose(){this.disposed=!0,this.ragdoll?.dispose(),this.ragdoll=null,this.lines?.dispose(),this.toonMat?.dispose();for(const{mat:n}of this.mats)n.dispose();if(this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.aura?.tex.dispose(),this.aura?.mesh.geometry.dispose(),this.aura?.mesh.material?.dispose(),this.auraHull?.material?.dispose(),this.bossEyes){this.bossEyes.tex.dispose();for(const n of this.bossEyes.sprites)n.material.dispose();this.bossEyes=null}this.bossAura&&(this.bossAura.geom.dispose(),this.bossAura.mat.dispose(),this.bossAura=null)}}export{ht as H,yp as W};
