'use client'
import { ThemeProvider } from 'next-themes'

interface ProviderProps {
    children: React.ReactNode;
    }

const Providers = ({ children }: ProviderProps) => {
    return  
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default Providers