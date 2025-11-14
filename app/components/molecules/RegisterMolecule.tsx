import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Card from "../atoms/Card";

const API_URL = import.meta.env.VITE_API_URL;

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterMolecule: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();

        // Validaciones
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (formData.password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            alert('Registro exitoso. Por favor inicia sesión');

            // Navegar al login después del registro exitoso
            navigate('/login');

        } catch (error) {
            console.error('Error en registro:', error);
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Error al registrar usuario';

                // Manejar errores específicos
                if (Array.isArray(errorMessage)) {
                    alert(errorMessage.join('\n'));
                } else {
                    alert(errorMessage);
                }
            } else {
                alert('Error al registrar usuario');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Crear Cuenta
            </h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Nombre
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={handleChange('name')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Tu nombre"
                        required
                        disabled={loading}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        value={formData.password}
                        onChange={handleChange('password')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="••••••••"
                        required
                        disabled={loading}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Confirmar Contraseña
                    </label>
                    <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="••••••••"
                        required
                        disabled={loading}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mt-6 disabled:bg-green-300 disabled:cursor-not-allowed"
                >
                    {loading ? 'Registrando...' : 'Registrarse'}
                </button>
                <p className="text-center text-gray-600 text-sm mt-4">
                    ¿Ya tienes cuenta?{' '}
                    <button
                        onClick={() => navigate('/login')}
                        className="text-green-600 hover:text-green-700 font-medium"
                        disabled={loading}
                    >
                        Inicia sesión
                    </button>
                </p>
            </div>
        </Card>
    );
};

export default RegisterMolecule;