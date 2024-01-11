// Choose Two large prime numbers: p, q; 
// N = p * q; and r = (p-1)*(q-1);
// Calculate numbers equivalent to 1 mod r. Or, (p-1)(q-1) + 1 ... 1+ r(inf).
// -- Basically rolling over the odometer by 1 figure.
// r will always end in 1, 3, 5, or 7 so != r % 2, could end in 0. R WILL NEVER BE PRIME
// Using a result of 1 mod r; or K = any number that is 1 + mod(p-1)(q-1), Factor K: K! ; K WILL NEVER BE PRIME
// Using 2 major factors of K, which will be called 'e' and 'd', perform e * d mod r which should equal 1. e*d mod r = 1. Both e and r should be relatively prime to r, independently
// using e and d, send and decrypt messages using these formuli: 
// Cipher = (Msg)e mod N
// Msg = (Cipher)d mod N
/* Copying from https://www.cs.drexel.edu/~popyack/IntroCS/HW/RSAWorksheet.html */
/* 
<!-- Hide from uneducated browsers
	//----------------------------------------------------------------------
	
		function mod( m, n )
		{			
			return m - n*Math.floor(m/n)
		}
	
	//----------------------------------------------------------------------
	
		function OldPowerMod(x,n,m)
		// Compute x^n mod m
		{
			var p = 1
			for ( i=0; i<n; i++ )
				p = mod( (p*x),m )
			return p
		}
	  
	//----------------------------------------------------------------------
	
		function PowerMod(x,p,N)
		// Compute x^p mod N
		{
			var A = 1
			var m = p
			var t = x
			
			while( m > 0 )
			{
				k = Math.floor( m/2 )
				r = m - 2*k
				if( r == 1 )
					A = mod( A*t, N )
				t = mod( t*t, N )
				m = k
			}			
			return A
		}
	  
	//----------------------------------------------------------------------
	
		function Factorize(n)
		{
			var temp = ""
			var T = n
			var PRIME = 1
			
			var i=1
			while( (T>1) && ( ++i < Math.sqrt(n)+1 ) )
			{
				while ( mod(T,i)==0 )
				{
					T = T/i
					if( PRIME == 0 ) temp += "*"
					if( PRIME == 1 ) PRIME = 0
					temp += i
				}
			}
			
			if( PRIME == 1 ) 
				temp = " is prime."
			else if( T>1 )
				temp += "*" + T
				
			return temp
		}
		
	//----------------------------------------------------------------------
	
		function GCD(m,n)
		{
			while( m != n )
			{
				if( m == 1 || n == 1)
					return 1
				else if ( m < n )
					n = mod(n,m)
				else
					m = mod(m,n)
			}	
			return m
		}
		
	//----------------------------------------------------------------------
	
		function Candidates(form)
		{
			var temp = ""           // Arithmetic is done with -r rather
			var r = -form.r.value   // than r since "+" gets interpreted
			var n = - (r-1)         // as a string operator, not arithmetic.
			var line = ""
			
			for( i=0; i<30; i++ )
			{
				if (line.length > 50)
				{
					temp += line + "\n"
					line = ""
				}
				line += n + " "
				n = n - r
			}
			
			return temp + line
		}

	//----------------------------------------------------------------------
	
		function ComputeNr(form)
		{
			var p = form.p.value
			var q = form.q.value
			form.N.value = p*q
			form.r.value = (p-1)*(q-1)
			form.ed.value = Candidates(form)
			return ""
		}

	//----------------------------------------------------------------------
	
		function ComputeED(form)
		{
			form.factors.value = Factorize(form.K.value)
			return ""
		}

	//----------------------------------------------------------------------
	
		function CheckED(form)
		{
			var temp = ""
			var e = form.e.value
			var d = form.d.value
			var r = form.r.value
			var N = form.N.value
			
			temp += "      e   = " + e + "\n"
			temp += "      d   = " + d + "\n"
			temp += "      N   = " + N + "\n"
			temp += "      r   = " + r + "\n"
			temp += "      e*d = " + eval(e*d) + "\n"
			temp += "e*d mod r = " + mod((e*d),r) + "\n"

			if( GCD(e,r) == 1 ) 
				temp += "e and r are relatively prime\n"
			else
				temp += "e and r are not relatively prime; gcd(e,r) = " + GCD(e,r) + "\n"

			if( GCD(d,r) == 1 ) 
				temp += "d and r are relatively prime\n"
			else
				temp += "d and r are not relatively prime; gcd(d,r) = " + GCD(d,r) + "\n"

			form.checker.value = temp
			return ""
		}

		function CheckCode(form)
		{
			var temp = ""
			var e = form.e.value
			var d = form.d.value
			var N = form.N.value
			var M = form.Msg.value

			form.Cipher.value = PowerMod(M,e,N)
			
			var C = form.Cipher.value
			form.Decipher.value = PowerMod(C,d,N)

			return ""
		}

	// end hiding from uneducated browsers --> */
