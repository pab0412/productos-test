import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Card from '../atoms/Card';

const API_URL = import.meta.env.VITE_API_URL;

const LoginMolecule: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();

        if (!email || !password) {
            alert('Por favor completa todos los campos');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            // Guardar el token en localStorage
            localStorage.setItem('token', response.data.access_token);

            // Opcional: guardar info del usuario
            if (response.data.user) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }

            alert('Login exitoso');

            // Navegar a la página principal
            navigate('/');

        } catch (error) {
            console.error('Error en login:', error);
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Credenciales incorrectas';
                alert(errorMessage);
            } else {
                alert('Error al iniciar sesión');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Iniciar Sesión
            </h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="tu@email.com"
                        required
                        disabled={loading}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                        disabled={loading}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e as any);
                            }
                        }}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-6 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                    {loading ? 'Cargando...' : 'Entrar'}
                </button>
                <p className="text-center text-gray-600 text-sm mt-4">
                    ¿No tienes cuenta?{' '}
                    <button
                        onClick={() => navigate('/register')}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        disabled={loading}
                    >
                        Regístrate
                    </button>
                </p>
            </div>
        </Card>
    );
};

export default LoginMolecule;